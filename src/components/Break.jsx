import moment from 'moment';

const Break = ({ breakLength, breakDecrement, breakIncrement }) => {
	const displayBreakLength = moment.duration(breakLength, 's').minutes();

	return (
		<div>
			<p className="text-center" id="break-label">
				Break
			</p>
			<p className="text-center" id="break-length">
				{displayBreakLength}
			</p>
			<div class="w-full inline-flex justify-center gap-x-2" role="group">
				<button
					className="w-10 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
					id="break-decrement"
					onClick={breakDecrement}
				>
					-
				</button>
				<button
					className="w-10 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
					id="break-increment"
					onClick={breakIncrement}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default Break;
