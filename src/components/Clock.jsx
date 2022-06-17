import { useState, useEffect, useRef } from 'react';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Clock = () => {
	const [ sessionLength, setSessionLength ] = useState(25);
	const [ breakLength, setBreakLength ] = useState(5);
	const [ type, setType ] = useState('Study');
	const [ timeLeft, setTimeLeft ] = useState(1500);
	const [ isRunning, setIsRunning ] = useState(false);

	const audioFile = useRef(null);

	// convert display:
	const timeFormat = () => {
		const minutes = Math.floor(timeLeft / 60);
		const seconds = timeLeft - minutes * 60;
		const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
		return `${formattedMinutes}:${formattedSeconds}`;
	};

	// countdown:
	const timer = setTimeout(() => {
		if (timeLeft && isRunning) {
			setTimeLeft(timeLeft - 1);
		}
	}, 1000);

	// start/stop button:
	const handleTimerClick = () => {
		clearTimeout(timer);
		setIsRunning(!isRunning);
	};

	// const clock = () => {
	// 	if (isRunning) {
	// 		timer;
	// 		resetTimer();
	// 	} else {
	// 		clearTimeout(timer);
	// 	}
	// };

	useEffect(
		() => {
			clock();
		},
		[ isRunning, timeLeft, timer ]
	);

	// reset button:
	const resetTimer = () => {
		if (audioFile.current !== null) {
			audioFile.current.play();
		}
		setType('Study');
		setTimeLeft(1500);
		setIsRunning(false);
		setBreakLength(5);
		setSessionLength(25);
		clearTimeout(timer);
		if (audioFile.current !== null) {
			audioFile.current.load();
		}
	};

	// session buttons:
	const sessionDecrement = () => {
		if (isRunning) {
			return;
		}

		if (sessionLength > 1) {
			setSessionLength(sessionLength => sessionLength - 1);
			if (type === 'Study') {
				setTimeLeft(sessionLength => sessionLength - 60);
			}
		}
	};
	const sessionIncrement = () => {
		if (isRunning) {
			return;
		}
		if (sessionLength < 60) {
			setSessionLength(sessionLength => sessionLength + 1);
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
		if (breakLength > 1) {
			setBreakLength(breakLength => breakLength - 1);
			if (type === 'Break') {
				setTimeLeft(breakLength => breakLength - 60);
			}
		}
	};
	const breakIncrement = () => {
		if (isRunning) {
			return;
		}
		if (breakLength < 60) {
			setBreakLength(breakLength => breakLength + 1);
			if (type === 'Break') {
				setTimeLeft(breakLength => breakLength + 60);
			}
		}
	};

	// listen for time to reach 0
	useEffect(
		() => {
			if (!timeLeft) {
				if (audioFile.current !== null) {
					audioFile.current.play();
				}
				if (type === 'Study') {
					setType('Break');
					setTimeLeft(breakLength * 60);
				} else if (type === 'Break') {
					setType('Study');
					setTimeLeft(sessionLength * 60);
				}
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
				timeFormat={timeFormat}
			/>
			<div className="w-full flex flex-row justify-evenly justify-self-end">
				<Break breakLength={breakLength} breakDecrement={breakDecrement} breakIncrement={breakIncrement} />

				<Session
					sessionLength={sessionLength}
					sessionDecrement={sessionDecrement}
					sessionIncrement={sessionIncrement}
				/>

				<audio id="beep" ref={audioFile}>
					<source
						src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
						type="audio/mpeg"
					/>
				</audio>
			</div>
		</div>
	);
};

export default Clock;
