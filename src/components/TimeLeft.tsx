import { ReactComponent as StartIcon } from './icons/startIcon.svg';
import { ReactComponent as StopIcon } from './icons/stopIcon.svg';
import { ReactComponent as RefreshButton } from './icons/refreshButton.svg';

const TimeLeft: React.FC<Props> = ({ type, handleTimerClick, minutes, seconds, isRunning, resetTimer }) => {
	return (
		<div className="w-full text-3xl flex flex-col items-center gap-5">
			<button id="reset" className="self-end mr-5 mb-5" onClick={resetTimer}>
				<RefreshButton className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
			<p id="timer-label">{type}</p>
			<p className="text-8xl font-bold" id="time-left">
				{minutes}:{seconds}
			</p>
			<button id="start_stop" onClick={handleTimerClick}>
				{isRunning ? (
					<StopIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
				) : (
					<StartIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
				)}
			</button>
		</div>
	);
};

type Props = {
	type: string;
	handleTimerClick: () => void;
	minutes: string;
	seconds: string;
	isRunning: boolean;
	resetTimer: () => void;
};

export default TimeLeft;
