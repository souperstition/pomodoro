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
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// When I click the element with the id of "break-decrement", the value within id="break-length" decrements by a value of 1, and I can see the updated value.
// expected '1' to equal '4'
ie([ e, e, e, e ]),
	a.assert.strictEqual(ue(document.getElementById('break-length')), '1'),
	i(),
	ie([ e ]),
	a.assert.strictEqual(ue(document.getElementById('break-length')), '4');

// When I click the element with the id of "break-increment", the value within id="break-length" increments by a value of 1, and I can see the updated value.
// expected '1' to equal '9'
ie(Array(4).fill('break-increment')),
	a.assert.strictEqual(ue(document.getElementById('break-length')), '9'),
	i(),
	ie([ 'break-increment' ]),
	a.assert.strictEqual(ue(document.getElementById('break-length')), '6');

// When I click the element with the id of "session-decrement", the value within id="session-length" decrements by a value of 1, and I can see the updated value.
// expected '1' to equal '21'
ie(Array(4).fill(t)),
	a.assert.strictEqual(ue(document.getElementById('session-length')), '21'),
	i(),
	ie([ t ]),
	a.assert.strictEqual(ue(document.getElementById('session-length')), '24');

// When I click the element with the id of "session-increment", the value within id="session-length" increments by a value of 1, and I can see the updated value.
// expected '1' to equal '29'
ie(Array(4).fill(r)),
	a.assert.strictEqual(ue(document.getElementById('session-length')), '29'),
	i(),
	ie([ r ]),
	a.assert.strictEqual(ue(document.getElementById('session-length')), '26');

// I should not be able to set a session or break length to > 60.
// Value in element with id of "break-length" is greater than 60.: expected '1' to equal '60'
ie(Array(60).fill('break-increment')),
	a.assert.strictEqual(
		ue(document.getElementById('break-length')),
		'60',
		'Value in element with id of "break-length" is greater than 60.'
	),
	i(),
	ie(Array(40).fill(r)),
	a.assert.strictEqual(
		ue(document.getElementById('session-length')),
		'60',
		'Value in element with id of "session-length" is greater than 60.'
	);

// When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.
// expected '00' to equal '1'
ie([ n ]),
	a.assert.strictEqual(
		u(document.getElementById('time-left').innerText),
		ue(document.getElementById('session-length'))
	);

// If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.
// 25 + 5 clock has started but time displayed is not changing: expected '46' to not equal '46'
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a break has begun.
// Timer has not reached 00:00.
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
// Timer has not reached 00:00.
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a session has begun.
// Timer has not reached 00:00.
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
// Timer has not reached 00:00.
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

//  When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 <audio> tag and have a corresponding id="beep".
// Timer has not reached 00:00.
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// The audio element with id="beep" must be 1 second or longer.
// Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
var t = this,
	a = arguments;
return new Promise(function(n, o) {
	var i = e.apply(t, a);
	function s(e) {
		r(i, n, o, s, u, 'next', e);
	}
	function u(e) {
		r(i, n, o, s, u, 'throw', e);
	}
	s(void 0);
});

// The audio element with id of "beep" must stop playing and be rewound to the beginning when the element with the id of "reset" is clicked.
// Audio element was not stopped when reset was clicked.: expected false to be true
document.getElementById('beep').play(),
	i(),
	a.assert.isTrue(document.getElementById('beep').paused, 'Audio element was not stopped when reset was clicked.'),
	a.assert.strictEqual(
		document.getElementById('beep').currentTime,
		0,
		'Audio element was not rewound when reset was clicked. HINT: use the currentTime property of the audio element to rewind.'
	);
