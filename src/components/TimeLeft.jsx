import { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionLength }) => {
	const [ intervalId, setIntervalId ] = useState(null);
	const [ timeLeft, setTimeLeft ] = useState(sessionLength);

	useEffect(
		() => {
			setTimeLeft(sessionLength);
		},
		[ sessionLength ]
	);
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
					} else return prevTimeLeft;
				});
			}, 1000);
			setIntervalId(newIntervalId);
		}
	};

	const displayTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div>
			<p id="timer-label">Session</p>
			<p id="time-left">{displayTimeLeft}</p>
			<button
				className="w-10 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
				onClick={handleTimerClick}
			>
				{isRunning ? 'stop' : 'start'}
			</button>
		</div>
	);
};

export default TimeLeft;
