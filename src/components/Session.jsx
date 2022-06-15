import moment from 'moment';
import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Session = ({ sessionLength, sessionDecrement, sessionIncrement }) => {
	const displaySessionLength = moment.duration(sessionLength, 's').minutes();

	return (
		<div class="w-1/2 flex justify-center items-center gap-x-2" role="group">
			<MinusIcon
				id="session-decrement"
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
				onClick={sessionDecrement}
			/>
			<div>
				<p className="text-center font-bold" id="session-label">
					Study for:
				</p>
				<p className="text-center mt-1">
					<span id="session-length">{displaySessionLength}</span> minutes
				</p>
			</div>
			<PlusIcon
				id="session-increment"
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
				onClick={sessionIncrement}
			/>
		</div>
	);
};

export default Session;
