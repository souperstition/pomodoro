import moment from 'moment';
import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Session = ({ sessionLength, sessionDecrement, sessionIncrement }) => {
	const displaySessionLength = moment.duration(sessionLength, 's').minutes();

	return (
		<div class="w-1/2 flex justify-center align-center gap-x-2" role="group">
			<MinusIcon
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
				onClick={sessionDecrement}
			/>
			<div>
				<p className="text-center font-bold" id="session-label">
					Study for:
				</p>
				<p className="text-center my-1" id="session-length">
					{displaySessionLength} minutes
				</p>
			</div>
			<PlusIcon
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
				onClick={sessionIncrement}
			/>
		</div>
	);
};

export default Session;
