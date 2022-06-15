import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { ReactComponent as StartIcon } from './icons/startIcon.svg';
import { ReactComponent as StopIcon } from './icons/stopIcon.svg';
import { ReactComponent as RefreshButton } from './icons/refreshButton.svg';

momentDurationFormatSetup(moment);

const TimeLeft = ({ timeLeft, isRunning, resetTimer, type, handleTimerClick }) => {
	const displayTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div className="w-full text-3xl flex flex-col items-center gap-5">
			<RefreshButton
				id="reset"
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700 self-end mr-5 mb-5"
				onClick={resetTimer}
			/>
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
