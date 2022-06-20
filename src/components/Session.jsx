import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Session = ({ isRunning, sessionLength, handleSessionDecrease, handleSessionIncrease }) => {
	return (
		<div className="w-1/2 flex justify-center items-center gap-x-2" role="group">
			<button disabled={isRunning} onClick={handleSessionDecrease} id="session-decrement">
				<MinusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
			<div className="flex flex-col justify-center">
				<h3 className="text-center font-bold" id="session-label">
					Study for:
				</h3>
				<p className="text-center mt-1">
					<span id="session-length">{sessionLength}</span> minutes
				</p>
			</div>
			<button disabled={isRunning} onClick={handleSessionIncrease} id="session-increment">
				<PlusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
		</div>
	);
};

export default Session;
