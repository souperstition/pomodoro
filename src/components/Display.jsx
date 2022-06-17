import { ReactComponent as StartIcon } from './icons/startIcon.svg';
import { ReactComponent as StopIcon } from './icons/stopIcon.svg';
import { ReactComponent as RefreshButton } from './icons/refreshButton.svg';

const TimeLeft = ({ isRunning, handlePlay, handleReset, timeFormatter, title }) => {
	return (
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
	);
};

export default TimeLeft;
