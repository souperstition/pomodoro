import moment from 'moment';
import { ReactComponent as PlusIcon } from './icons/plusIcon.svg';
import { ReactComponent as MinusIcon } from './icons/minusIcon.svg';

const Break = ({ breakLength, breakDecrement, breakIncrement }) => {
	const displayBreakLength = moment.duration(breakLength, 's').minutes();

	return (
		<div class="w-1/2 flex justify-center items-center gap-x-2" role="group">
			<MinusIcon
				id="break-decrement"
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
				onClick={breakDecrement}
			/>
			<div>
				<p className="text-center font-bold" id="break-label">
					Break:
				</p>
				<p className="text-center mt-1">
					<span id="break-length">{displayBreakLength}</span> minutes
				</p>
			</div>
			<PlusIcon
				id="break-increment"
				className="cursor-pointer transition-colors duration-300 text-amber-500 hover:text-amber-700"
				onClick={breakIncrement}
			/>
		</div>
	);
};

export default Break;
