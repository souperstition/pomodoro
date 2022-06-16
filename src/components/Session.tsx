import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Session: React.FC<Props> = ({ sessionDisplay, sessionDecrement, sessionIncrement }) => {
	return (
		<div className="w-1/2 flex justify-center items-center gap-x-2" role="group">
			<button id="session-decrement" onClick={sessionDecrement}>
				<MinusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>

			<div>
				<p className="text-center font-bold" id="session-label">
					Study for:
				</p>
				<p className="text-center mt-1">
					<span id="session-length">{sessionDisplay}</span> minutes
				</p>
			</div>
			<button id="session-increment" onClick={sessionIncrement}>
				<PlusIcon className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700" />
			</button>
		</div>
	);
};

type Props = {
	sessionDisplay: number;
	sessionDecrement: () => void;
	sessionIncrement: () => void;
};

export default Session;
