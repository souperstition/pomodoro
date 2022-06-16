import { useState, useEffect, useRef } from 'react';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Clock: React.FC = () => {
	const audioFile = useRef<HTMLAudioElement>(null);
	const [ sessionLength, setSessionLength ] = useState(60 * 25);
	const [ breakLength, setBreakLength ] = useState(300);
	const [ type, setType ] = useState('session');
	const [ intervalId, setIntervalId ] = useState<NodeJS.Timeout | null>(null);
	const [ timeLeft, setTimeLeft ] = useState(sessionLength);

	useEffect(
		() => {
			const getBreakLength = breakLength;
			setBreakLength(getBreakLength);
		},
		[ breakLength ]
	);
	useEffect(
		() => {
			const getSessionLength = sessionLength;
			setSessionLength(getSessionLength);
		},
		[ sessionLength ]
	);

	// start/stop button
	const isRunning = intervalId !== null;
	const handleTimerClick = () => {
		if (isRunning) {
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			const newIntervalId = setInterval(() => {
				setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
			}, 1000);
			setIntervalId(newIntervalId);
		}
	};

	// reset button:
	const resetTimer = () => {
		if (intervalId !== null) {
			clearInterval(intervalId);
		}
		setIntervalId(null);
		setBreakLength(300);
		setSessionLength(60 * 25);
		setType('session');
		setTimeLeft(60 * 25);
		audioFile?.current?.load();
	};

	useEffect(
		() => {
			if (timeLeft === 0) {
				audioFile?.current?.play();
				if (type === 'session') {
					setType('break');
					setTimeLeft(breakLength);
				} else if (type === 'break') {
					setType('session');
					setTimeLeft(sessionLength);
				}
				return audioFile?.current?.load();
			}
		},
		[ breakLength, type, sessionLength, timeLeft ]
	);

	// session buttons:
	const sessionDecrement = () => {
		if (isRunning) {
			return;
		}
		const newSessionLength = sessionLength - 60;
		if (newSessionLength > 0) {
			setSessionLength(newSessionLength);
			if (type === 'session') setTimeLeft(newSessionLength);
		}
	};
	const sessionIncrement = () => {
		if (isRunning) {
			return;
		}
		const newSessionLength = sessionLength + 60;
		if (newSessionLength <= 3600) {
			setSessionLength(newSessionLength);
			if (type === 'session') setTimeLeft(newSessionLength);
		}
	};

	// session buttons:
	const breakDecrement = () => {
		if (isRunning) {
			return;
		}
		const newBreakLength = breakLength - 60;
		if (newBreakLength > 0) {
			setBreakLength(newBreakLength);
			if (type === 'break') setTimeLeft(newBreakLength);
		}
	};
	const breakIncrement = () => {
		if (isRunning) {
			return;
		}
		const newBreakLength = breakLength + 60;
		if (newBreakLength <= 3600) {
			setBreakLength(newBreakLength);
			if (type === 'break') setTimeLeft(newBreakLength);
		}
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
				<audio id="beep" ref={audioFile}>
					<source src="" type="audio/mpeg" />
				</audio>
			</div>
		</div>
	);
};

export default Clock;
