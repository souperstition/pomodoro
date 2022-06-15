import { useState, useEffect } from 'react';

const Timer = () => {
	const [ timeLeft, setTimeLeft ] = useState(25);
	const [ isRunning, setIsRunning ] = useState(false);

	useEffect(
		() => {
			const countdown = setInterval(() => {
				if (isRunning && timeLeft > 0) {
					setTimeLeft(timeLeft - 1);
				} else {
					stopTimer();
				}
			}, 1000);
			return () => clearInterval(countdown);
		},
		[ isRunning, timeLeft ]
	);

	const handleChange = e => {
		if (e.target.value > 432000) {
			setTimeLeft(432000);
		} else {
			setTimeLeft(e.target.value);
		}
	};

	const startTimer = () => {
		setIsRunning(true);
	};

	const stopTimer = () => {
		setIsRunning(false);
	};

	const resetTimer = () => {
		setTimeLeft(25);
		setIsRunning(false);
	};

	return (
		<div className="flex flex-col justify-center">
			<input
				className="w-full text-center bg-transparent text-9xl font-bold pb-4"
				type="number"
				max="432000"
				value={timeLeft}
				onChange={handleChange}
				pattern="[0-9]+"
				onKeyDown={e => [ 'e', 'E', '+', '-' ].includes(e.key) && e.preventDefault()}
			/>
			<div class="inline-flex justify-center gap-x-2" role="group">
				<button
					onClick={isRunning ? stopTimer : startTimer}
					className="px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
				>
					{isRunning ? 'Stop' : 'Start'}
				</button>

				<button
					onClick={resetTimer}
					className="px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Timer;
