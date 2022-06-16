import moment from 'moment';
// @ts-ignore
import momentDurationFormatSetup from 'moment-duration-format';
import { ReactComponent as StartIcon } from './icons/startIcon.svg';
import { ReactComponent as StopIcon } from './icons/stopIcon.svg';
import { ReactComponent as RefreshButton } from './icons/refreshButton.svg';
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({ timeLeft, isRunning, resetTimer, type, handleTimerClick }) => {
	// @ts-ignore
	const displayTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div className="w-full text-3xl flex flex-col items-center gap-5">
			<button id="reset" onClick={resetTimer} className="self-end mr-5 mb-5">
				<RefreshButton className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
			<p id="timer-label">
				{type === 'session' && 'Study'}
				{type === 'break' && 'Break'}
			</p>
			<p className="text-8xl font-bold" id="time-left">
				{displayTimeLeft}
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
	timeLeft: number;
	isRunning: boolean;
	resetTimer: () => void;
	type: string;
	handleTimerClick: () => void;
};

export default TimeLeft;