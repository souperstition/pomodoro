import moment from 'moment';

const Session = ({ sessionLength, sessionDecrement, sessionIncrement }) => {
	const displaySessionLength = moment.duration(sessionLength, 's').minutes();

	return (
		<div>
			<p className="text-center" id="session-label">
				Session
			</p>
			<p className="text-center" id="session-length">
				{displaySessionLength}
			</p>
			<div class="w-full inline-flex justify-center gap-x-2" role="group">
				<button
					className="w-10 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
					id="session-decrement"
					onClick={sessionDecrement}
				>
					-
				</button>
				<button
					className="w-10 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-amber-700 border-amber-400 shadow-amber-500/30 hover:bg-amber-500 hover:text-amber-100"
					id="session-increment"
					onClick={sessionIncrement}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default Session;
