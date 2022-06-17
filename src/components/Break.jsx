import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Break = ({ breakLength, handleBreakDecrease, handleBreakIncrease, isRunning }) => {
	return (
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
	);
};

export default Break;
