import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Clock: React.FC = () => {
	const [ sessionLength, setSessionLength ] = useState(1500);
	const [ breakLength, setBreakLength ] = useState(300);
	const [ type, setType ] = useState('Study');
	const [ timeLeft, setTimeLeft ] = useState(1500);
	const [ isRunning, setIsRunning ] = useState(false);
	
	const intervalRef = useRef<NodeJS.Timeout>();
	const audioFile = useRef<HTMLAudioElement>(null);

	// convert displays:
	const minutes = Math.floor(timeLeft / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
	const seconds = Math.floor((timeLeft % 3600) % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
	const breakDisplay = breakLength / 60;
	const sessionDisplay = sessionLength / 60;

	useEffect(() => {
		return () => clearInterval(intervalRef.current);
	}, []);

	// countdown:
	const timer = () => {
		setTimeLeft(timeLeft => timeLeft - 1);
	};

	// start/stop button: 
	const handleTimerClick = () => {
		if (!isRunning) {
			intervalRef.current = setInterval(timer, 100);
		} else clearInterval(intervalRef.current);
		setIsRunning(!isRunning);
	};

	// reset button:
	const resetTimer = () => {
			setType('Study');
			setTimeLeft(1500);
			setIsRunning(false);
			setBreakLength(300);
			setSessionLength(1500);
		clearInterval(intervalRef.current);
		audioFile?.current?.load();
	};

	// session buttons:
	const sessionDecrement = () => {
		if (isRunning) {
			return;
		}
		
		if (sessionLength > 60) {
			setSessionLength(sessionLength => sessionLength - 60);
			if (type === 'Study') {
				setTimeLeft(sessionLength => sessionLength - 60);
			}
		}
	};
	const sessionIncrement = () => {
		if (isRunning) {
			return;
		}
		if (sessionLength < 3600) {
			setSessionLength(sessionLength => sessionLength + 60);
			if (type === 'Study') {
				setTimeLeft(sessionLength => sessionLength + 60);
			}
		}
	};

	// break buttons:
	const breakDecrement = () => {
		if (isRunning) {
			return;
		}
		if (breakLength > 60) {
			setBreakLength(breakLength => breakLength - 60);
			if (type === 'Break') {
				setTimeLeft(breakLength => breakLength - 60);
			}
		}
	};
	const breakIncrement = () => {
		if (isRunning) {
			return;
		}
		if (breakLength < 3600) {
			setBreakLength(breakLength => breakLength + 60);
			if (type === 'Break') {
				setTimeLeft(breakLength => breakLength + 60);
			}
		}
	};

	// listen for time to reach 0
	useEffect(
		() => {
			if (timeLeft < 0) {
				audioFile?.current?.play();
				if (type === 'Study') {
					setType('Break');
					setTimeLeft(breakLength);
				} else if (type === 'Break') {
					setType('Study');
					setTimeLeft(sessionLength);
				}
				return audioFile?.current?.load();
			}
		},
		[ breakLength, type, sessionLength, timeLeft ]
	);

	return (
		<div className="bg-amber-200 w-3/4 md:w-1/2 h-1/2 flex flex-col justify-between py-5 items-center rounded-3xl drop-shadow-lg gap-8">
			<TimeLeft
				type={type}
				resetTimer={resetTimer}
				handleTimerClick={handleTimerClick}
				isRunning={isRunning}
				minutes={minutes}
				seconds={seconds}
			/>
			<div className="w-full flex flex-row justify-evenly justify-self-end">
				<Break
					breakDisplay={breakDisplay} breakDecrement={breakDecrement} breakIncrement={breakIncrement}
				/>

				<Session
					sessionDisplay={sessionDisplay}
					sessionDecrement={sessionDecrement}
					sessionIncrement={sessionIncrement}
				/>

				<audio id="beep" ref={audioFile}>
					<source src="" type="audio/mpeg" />
				</audio>
			</div>
		</div>
	);
};

export default Clock;
