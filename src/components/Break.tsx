import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Break: React.FC<Props> = ({ breakDisplay, breakDecrement, breakIncrement }) => {
	return (
		<div className="w-1/2 flex justify-center items-center gap-x-2" role="group">
			<button id="break-decrement" onClick={breakDecrement}>
				<MinusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
			<div>
				<p className="text-center font-bold" id="break-label">
					Break:
				</p>
				<p className="text-center mt-1">
					<span id="break-length">{breakDisplay}</span> minutes
				</p>
			</div>
			<button id="break-increment" onClick={breakIncrement}>
				<PlusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
		</div>
	);
};

type Props = {
	breakDisplay: number;
	breakDecrement: () => void;
	breakIncrement: () => void;
};

export default Break;
