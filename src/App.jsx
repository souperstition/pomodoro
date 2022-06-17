import { useState, useEffect } from 'react';
import './index.css';
import { ReactComponent as StartIcon } from './components/icons/startIcon.svg';
import { ReactComponent as StopIcon } from './components/icons/stopIcon.svg';
import { ReactComponent as RefreshButton } from './components/icons/refreshButton.svg';
import { ReactComponent as PlusIcon } from './components/icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './components/icons/minusIcon.svg';

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
				<div className="w-full text-3xl flex flex-col items-center gap-5">
					<button className="self-end mr-5 mb-5" onClick={handleReset} id="reset">
						<RefreshButton className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
					</button>
					<h2 id="timer-label">{title}</h2>
					<h3 className="text-8xl font-bold" id="time-left">
						{timeFormatter()}
					</h3>
					<button onClick={handlePlay} id="start_stop">
						{isRunning ? (
							<StopIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
						) : (
							<StartIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
						)}
					</button>
				</div>
				<div className="w-full flex flex-row justify-evenly justify-self-end">
					<div className="w-1/2 flex justify-center items-center gap-x-2" role="group">
						<button disabled={isRunning} onClick={handleBreakIncrease} id="break-increment">
							<PlusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
						</button>
						<div className="flex flex-col justify-center">
							<h3 className="text-center font-bold" id="break-label">
								Break Length:
							</h3>
							<p className="text-center mt-1">
								<span id="break-length">{breakLength}</span> minutes
							</p>
						</div>
						<button disabled={isRunning} onClick={handleBreakDecrease} id="break-decrement">
							<MinusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
						</button>
					</div>
					<div className="w-1/2 flex justify-center items-center gap-x-2" role="group">
						<button disabled={isRunning} onClick={handleSessionIncrease} id="session-increment">
							<PlusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
						</button>
						<div className="flex flex-col justify-center">
							<h3 className="text-center font-bold" id="session-label">
								Study for:
							</h3>
							<p className="text-center mt-1">
								<span id="session-length">{sessionLength}</span> minutes
							</p>
						</div>
						<button disabled={isRunning} onClick={handleSessionDecrease} id="session-decrement">
							<MinusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
						</button>
					</div>
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
