import { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ sessionLength }) => {
	const [ timeLeft, setTimeLeft ] = useState(sessionLength);

	useEffect(
		() => {
			setTimeLeft(sessionLength);
		},
		[ sessionLength ]
	);

	const displayTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');

	return (
		<div>
			<p id="timer-label">Session</p>
			<p id="time-left">{displayTimeLeft}</p>
		</div>
	);
};

export default TimeLeft;
