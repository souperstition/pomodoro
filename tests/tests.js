function ie(e) {
	ae(e).forEach(function(e) {
		setTimeout(() => {
			e && 'function' == typeof e.click && e.click();
		}, 50);
	});
}

function ae(e) {
	return e.map(function(e) {
		return document.getElementById(e);
	});
}

// When I click the element with the id of "reset", any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.
// Timer has not reached 00:00.
ie(Array(60).fill('session-decrement'));
ie(Array(60).fill('break-decrement'));
ie([ 'start_stop' ]);

// When I click the element with the id of "break-decrement", the value within id="break-length" decrements by a value of 1, and I can see the updated value.
// expected '1' to equal '4'

// When I click the element with the id of "break-increment", the value within id="break-length" increments by a value of 1, and I can see the updated value.
// expected '1' to equal '9'

// When I click the element with the id of "session-decrement", the value within id="session-length" decrements by a value of 1, and I can see the updated value.
// expected '1' to equal '21'

// When I click the element with the id of "session-increment", the value within id="session-length" increments by a value of 1, and I can see the updated value.
// expected '1' to equal '29'

// I should not be able to set a session or break length to > 60.
// Value in element with id of "break-length" is greater than 60.: expected '1' to equal '60'

// When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.
// expected '00' to equal '1'

// If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.
// 25 + 5 clock has started but time displayed is not changing: expected '46' to not equal '46'

// When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a break has begun.
// Timer has not reached 00:00.

// When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
// Timer has not reached 00:00.

// When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a session has begun.
// Timer has not reached 00:00.

// When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
// Timer has not reached 00:00.

//  When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 <audio> tag and have a corresponding id="beep".
// Timer has not reached 00:00.

// The audio element with id="beep" must be 1 second or longer.
// Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.

// The audio element with id of "beep" must stop playing and be rewound to the beginning when the element with the id of "reset" is clicked.
// Audio element was not stopped when reset was clicked.: expected false to be true
