import { useState, useEffect } from 'react';
import './index.css';
import Display from './components/Display';
import Break from './components/Break';
import Session from './components/Session';

const App = () => {
	const [ breakLength, setBreakLength ] = useState(5);
	const [ sessionLength, setSessionLength ] = useState(25);
	const [ timeLeft, setTimeLeft ] = useState(1500);
	const [ sessionType, setSessionType ] = useState('SESSION');

	const [ isRunning, setIsRunning ] = useState(false);

	const timer = setTimeout(() => {
		if (timeLeft && isRunning) {
			setTimeLeft(timeLeft - 1);
		}
	}, 1000);

	const handleBreakIncrease = () => {
		if (breakLength < 60) {
			setBreakLength(breakLength + 1);
		}
	};

	const handleBreakDecrease = () => {
		if (breakLength > 1) {
			setBreakLength(breakLength - 1);
		}
	};

	const handleSessionIncrease = () => {
		if (sessionLength < 60) {
			setSessionLength(sessionLength + 1);
			setTimeLeft(timeLeft + 60);
		}
	};

	const handleSessionDecrease = () => {
		if (sessionLength > 1) {
			setSessionLength(sessionLength - 1);
			setTimeLeft(timeLeft - 60);
		}
	};

	const handleReset = () => {
		clearTimeout(timer);
		setIsRunning(false);
		setTimeLeft(1500);
		setBreakLength(5);
		setSessionLength(25);
		setSessionType('SESSION');
		const audio = document.getElementById('beep');
		audio.pause();
		audio.currentTime = 0;
	};

	const handlePlay = () => {
		clearTimeout(timer);
		setIsRunning(!isRunning);
	};

	const resetTimer = () => {
		const audio = document.getElementById('beep');
		if (!timeLeft && sessionType === 'SESSION') {
			setTimeLeft(breakLength * 60);
			setSessionType('BREAK');
			audio.play();
		}
		if (!timeLeft && sessionType === 'BREAK') {
			setTimeLeft(sessionLength * 60);
			setSessionType('SESSION');
			audio.pause();
			audio.currentTime = 0;
		}
	};

	const clock = () => {
		if (isRunning) {
			resetTimer();
			return timer;
		} else {
			clearTimeout(timer);
		}
	};

	useEffect(
		() => {
			clock();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ isRunning, timeLeft, timer ]
	);

	const timeFormatter = () => {
		const minutes = Math.floor(timeLeft / 60);
		const seconds = timeLeft - minutes * 60;
		const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
		return `${formattedMinutes}:${formattedSeconds}`;
	};

	const title = sessionType === 'SESSION' ? 'Study' : 'Break';

	return (
		<div className="flex h-screen mx-0 w-screen items-center justify-center bg-slate-800">
			<div className="bg-amber-200 w-3/4 md:w-1/2 h-1/2 flex flex-col justify-between py-5 items-center rounded-3xl drop-shadow-lg gap-8">
				<Display
					title={title}
					isRunning={isRunning}
					handlePlay={handlePlay}
					handleReset={handleReset}
					timeFormatter={timeFormatter}
				/>
				<div className="w-full flex flex-row justify-evenly justify-self-end">
					<Break
						isRunning={isRunning}
						breakLength={breakLength}
						handleBreakDecrease={handleBreakDecrease}
						handleBreakIncrease={handleBreakIncrease}
					/>
					<Session
						isRunning={isRunning}
						sessionLength={sessionLength}
						handleSessionDecrease={handleSessionDecrease}
						handleSessionIncrease={handleSessionIncrease}
					/>
				</div>
			</div>
			<audio
				id="beep"
				preload="auto"
				src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
			/>
		</div>
	);
};

export default App;
