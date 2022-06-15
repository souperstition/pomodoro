import { useState, useEffect, useRef } from 'react';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Clock = () => {
	const audioFile = useRef(null);
	const [ sessionLength, setSessionLength ] = useState(60 * 25);
	const [ breakLength, setBreakLength ] = useState(300);
	const [ type, setType ] = useState('session');
	const [ intervalId, setIntervalId ] = useState(null);
	const [ timeLeft, setTimeLeft ] = useState(sessionLength);

	// session buttons:
	const sessionDecrement = () => {
		const newSessionLength = sessionLength - 60;
		if (newSessionLength > 0) {
			setSessionLength(newSessionLength);
		}
	};
	const sessionIncrement = () => {
		const newSessionLength = sessionLength + 60;
		if (newSessionLength <= 3600) {
			setSessionLength(newSessionLength);
		}
	};

	// session buttons:
	const breakDecrement = () => {
		const newBreakLength = breakLength - 60;
		if (newBreakLength > 0) {
			setBreakLength(newBreakLength);
		}
	};
	const breakIncrement = () => {
		const newBreakLength = breakLength + 60;
		if (newBreakLength <= 3600) {
			setBreakLength(newBreakLength);
		}
	};

	// start/stop button
	const isRunning = intervalId !== null;
	const handleTimerClick = () => {
		if (isRunning) {
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			const newIntervalId = setInterval(() => {
				setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
			}, 50);
			setIntervalId(newIntervalId);
		}
	};

	// reset button:
	const resetTimer = () => {
		clearInterval(intervalId);
		setIntervalId(null);
		setBreakLength(300);
		setSessionLength(60 * 25);
		setType('session');
		setTimeLeft(60 * 25);
		audioFile.current.load();
	};

	useEffect(
		() => {
			if (type === 'session') {
				setTimeLeft(() => sessionLength);
			}

			if (type === 'break') {
				setTimeLeft(() => breakLength);
			}
		},
		[ sessionLength, type, breakLength ]
	);

	useEffect(
		() => {
			if (timeLeft === 0) {
				audioFile.current.play();
				if (type === 'session') {
					setType('break');
					setTimeLeft(breakLength);
				} else if (type === 'break') {
					setType('session');
					setTimeLeft(sessionLength);
				}
				audioFile.current.load();
			}
		},
		[ breakLength, type, sessionLength, timeLeft ]
	);

	return (
		<div className="bg-amber-200 w-3/4 md:w-1/2 h-1/2 flex flex-col justify-between py-5 items-center rounded-3xl drop-shadow-lg gap-8">
			<TimeLeft
				timeLeft={timeLeft}
				type={type}
				resetTimer={resetTimer}
				handleTimerClick={handleTimerClick}
				isRunning={isRunning}
			/>
			<div className="w-full flex flex-row justify-evenly justify-self-end">
				<Break breakLength={breakLength} breakDecrement={breakDecrement} breakIncrement={breakIncrement} />

				<Session
					sessionLength={sessionLength}
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
