import { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { ReactComponent as StartIcon } from './icons/startIcon.svg';
import { ReactComponent as StopIcon } from './icons/stopIcon.svg';

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionLength, breakLength }) => {
	const [ type, setType ] = useState('session');
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

	const displayTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div className="text-3xl flex flex-col items-center gap-2">
			<p id="timer-label">
				{type === 'session' && 'Study'}
				{type === 'break' && 'Break'}
			</p>
			<p className="text-8xl font-bold" id="time-left">
				{displayTimeLeft}
			</p>

			{isRunning ? (
				<StopIcon
					className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
					onClick={handleTimerClick}
				/>
			) : (
				<StartIcon
					className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
					onClick={handleTimerClick}
				/>
			)}
		</div>
	);
};

export default TimeLeft;
