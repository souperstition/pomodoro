import { useState, useEffect } from 'react';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Clock = () => {
	const [ sessionLength, setSessionLength ] = useState(60 * 25);
	const [ breakLength, setBreakLength ] = useState(300);
	const [ type, setType ] = useState('session');
	const [ intervalId, setIntervalId ] = useState(null);
	const [ timeLeft, setTimeLeft ] = useState(sessionLength);

	useEffect(
		() => {
			if (type === 'session') {
				setTimeLeft(sessionLength);
			}
		},
		[ sessionLength, type ]
	);

	// session buttons:
	const sessionDecrement = () => {
		const newSessionLength = sessionLength - 60;
		if (newSessionLength < 0) {
			setSessionLength(0);
		} else {
			setSessionLength(sessionLength - 60);
		}
	};
	const sessionIncrement = () => {
		setSessionLength(sessionLength + 60);
	};

	// break buttons:
	const breakDecrement = () => {
		const newBreakLength = breakLength - 60;
		if (newBreakLength < 0) {
			setBreakLength(0);
		} else {
			setBreakLength(breakLength - 60);
		}
	};
	const breakIncrement = () => {
		setBreakLength(breakLength + 60);
	};

	const isRunning = intervalId !== null;
	const handleTimerClick = () => {
		if (isRunning) {
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			const newIntervalId = setInterval(() => {
				setTimeLeft(prevTimeLeft => {
					const newTimeLeft = prevTimeLeft - 1;
					if (newTimeLeft >= 0) {
						return prevTimeLeft - 1;
					}

					if (type === 'session') {
						setType('break');
						setTimeLeft(breakLength);
					}

					if (type === 'break') {
						setType('session');
						setTimeLeft(sessionLength);
					}
				});
			}, 100);
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
	};

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
			</div>
		</div>
	);
};

export default Clock;
