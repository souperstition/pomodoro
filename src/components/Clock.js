import { useState } from 'react';

import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Clock = () => {
	const [ sessionLength, setSessionLength ] = useState(60 * 25);

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

	const [ breakLength, setBreakLength ] = useState(300);

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

	return (
		<div className="bg-amber-200 w-1/2 h-1/2 flex justify-center items-center rounded-3xl drop-shadow-lg gap-4">
			<Break breakLength={breakLength} breakDecrement={breakDecrement} breakIncrement={breakIncrement} />
			<TimeLeft sessionLength={sessionLength} />
			<Session
				sessionLength={sessionLength}
				sessionDecrement={sessionDecrement}
				sessionIncrement={sessionIncrement}
			/>
		</div>
	);
};

export default Clock;
