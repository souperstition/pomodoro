function test() {
	var e = 'break-decrement',
		t = 'session-decrement',
		r = 'session-increment',
		n = 'start_stop',
		o = document.getElementById('timer-label') && document.getElementById('timer-label').innerText;
	function i() {
		ie([ 'reset' ]);
	}
	var s = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
	function u(e) {
		return s.exec(e)[1];
	}
	function l(e) {
		return s.exec(e)[2];
	}
	function c(e, t) {
		var r = new MutationObserver(t);
		return r.observe(e, { childList: !0, characterData: !0, subtree: !0 }), r;
	}
	var h = function(e, t, r) {
			var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3;
			return new Promise(function(n, o) {
				var i = d(function() {
						u.disconnect(), clearTimeout(s), o(new Error(r));
					}, a),
					s = d(function() {
						u.disconnect(), clearTimeout(i), o(new Error(r));
					}, 5e3),
					u = c(e, function() {
						clearTimeout(s), t() && (u.disconnect(), clearTimeout(i), n());
					});
			});
		},
		f = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 9e4,
				t = document.getElementById('time-left');
			return h(
				t,
				function() {
					return /^00[\.:,\/]00$/.test(t.innerText);
				},
				'Timer has not reached 00:00.',
				e
			);
		},
		p = function() {
			var e = document.getElementById('time-left');
			return h(
				e,
				function() {
					return !0;
				},
				'Timer has not changed.'
			);
		},
		d = window.setTimeout,
		g = window.setInterval;
	function m() {
		(window.setTimeout = function(e) {
			return d(e, 30);
		}),
			(window.setInterval = function(e) {
				return g(e, 30);
			});
	}
	function y() {
		(window.setTimeout = d), (window.setInterval = g);
	}
	describe('#25 + 5 Clock tests', function() {
		beforeEach(function() {
			i();
		}),
			afterEach(function() {
				y();
			}),
			after(function() {
				i(), y();
			}),
			// 1
			describe('#Technology Stack', function() {
				it(P, function() {
					return !0;
				});
			}),
			// 2
			describe('#Content', function() {
				it('I can see an element with id="break-label" that contains a\n      string (e.g. â€œBreak Lengthâ€).', function() {
					var e = document.getElementById('break-label');
					a.assert.isAbove(e.innerText.length, 0, 'Element does not contain a string');
				}),
					// 3
					it('I can see an element with id="session-label" that contains\n      a string (e.g. "Session Lengthâ€).', function() {
						var e = document.getElementById('session-label');
						a.assert.isAbove(e.innerText.length, 0, 'Element does not contain a string');
					}),
					// 4
					it('I can see two clickable elements with corresponding IDs:\n      id="break-decrement" and id="session-decrement".', function() {
						a.assert.isNotNull(document.getElementById('break-decrement')),
							a.assert.isNotNull(document.getElementById('session-decrement'));
					}),
					// 5
					it('I can see two clickable elements with corresponding IDs:\n      id="break-increment" and id="session-increment".', function() {
						a.assert.isNotNull(document.getElementById('break-increment')),
							a.assert.isNotNull(document.getElementById('session-increment'));
					}),
					// 6
					it('I can see an element, with corresponding id="break-length",\n      which by default (on load) displays a value of 5.', function() {
						var e = document.getElementById('break-length');
						a.assert.strictEqual(ue(e), '5', 'A value of 5 is not displayed by default');
					}),
					// 7
					it('I can see an element, with corresponding\n      id="session-length", which by default displays a value of 25.', function() {
						var e = document.getElementById('session-length');
						a.assert.strictEqual(ue(e), '25', 'A value of 25 is not displayed by default');
					}),
					// 8
					it('I can see an element, with corresponding id="timer-label",\n      that contains a string indicating a session is initialized\n      (e.g. "Session").', function() {
						var e = document.getElementById('timer-label');
						a.assert.isAbove(e.innerText.length, 0, 'Element does not contain a string');
					}),
					// 9
					it(
						'I can see an element with corresponding id="time-left".\n      NOTE: Paused or running, the value in this field should always be\n      displayed in mm:ss format (i.e. 25:00).',
						G()(
							z.a.mark(function e() {
								var t;
								return z.a.wrap(function(e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(t = document.getElementById('time-left')),
													a.assert.isNotNull(t),
													a.assert.strictEqual(
														u(t.innerText),
														'25',
														'time-left is not formatted correctly'
													),
													ie(Array(35).fill(r)),
													(e.next = 6),
													ee(1500)
												);
											case 6:
												a.assert.strictEqual(
													u(t.innerText),
													'60',
													'time-left is not formatted correctly'
												);
											case 7:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						)
					),
					// 10
					it('I can see a clickable element with corresponding\n      id="start_stop".', function() {
						a.assert.isNotNull(document.getElementById('start_stop'));
					}),
					// 11
					it('I can see a clickable element with corresponding\n      id="reset".', function() {
						a.assert.isNotNull(document.getElementById('reset'));
					});
			}),
			describe('#Timer', function() {
				// 12
				it(
					'When I click the element with the id of "reset", any\n      running timer should be stopped, the value within id="break-length" should\n      return to 5, the value within id="session-length" should return to 25, and\n      the element with id="time-left" should reset to it\'s default state.',
					G()(
						z.a.mark(function r() {
							var s, u, c;
							return z.a.wrap(
								function(r) {
									for (;;)
										switch ((r.prev = r.next)) {
											case 0:
												return (
													this.timeout(1e5),
													m(),
													ie(Array(60).fill(t)),
													ie(Array(60).fill(e)),
													ie([ n ]),
													(r.next = 7),
													f()
												);
											case 7:
												return y(), (r.next = 10), ee(1500);
											case 10:
												return (
													i(),
													(s = document.getElementById('timer-label').innerText),
													(u = l(document.getElementById('time-left').innerText)),
													a.assert.strictEqual(
														s,
														o,
														'Default timer label was not properly reset '
													),
													(r.next = 16),
													ee(1500)
												);
											case 16:
												a.assert.strictEqual(
													ue(document.getElementById('break-length')),
													'5',
													'Default values for break length were not properly reset'
												),
													a.assert.strictEqual(
														ue(document.getElementById('session-length')),
														'25',
														'Default values for session length were not properly reset'
													),
													(c = l(document.getElementById('time-left').innerText)),
													a.assert.strictEqual(
														c,
														u,
														'25 + 5 has paused but time continued elapsing'
													);
											case 20:
											case 'end':
												return r.stop();
										}
								},
								r,
								this
							);
						})
					)
				),
					// 13
					it('When I click the element with the id of "break-decrement",\n      the value within id="break-length" decrements by a value of 1, and I can\n      see the updated value.', function() {
						ie([ e, e, e, e ]),
							a.assert.strictEqual(ue(document.getElementById('break-length')), '1'),
							i(),
							ie([ e ]),
							a.assert.strictEqual(ue(document.getElementById('break-length')), '4');
					}),
					// 14
					it('When I click the element with the id of "break-increment",\n      the value within id="break-length" increments by a value of 1, and I can\n      see the updated value.', function() {
						ie(Array(4).fill('break-increment')),
							a.assert.strictEqual(ue(document.getElementById('break-length')), '9'),
							i(),
							ie([ 'break-increment' ]),
							a.assert.strictEqual(ue(document.getElementById('break-length')), '6');
					}),
					// 15
					it('When I click the element with the id of\n      "session-decrement", the value within id="session-length" decrements by a\n      value of 1, and I can see the updated value.', function() {
						ie(Array(4).fill(t)),
							a.assert.strictEqual(ue(document.getElementById('session-length')), '21'),
							i(),
							ie([ t ]),
							a.assert.strictEqual(ue(document.getElementById('session-length')), '24');
					}),
					// 16
					it('When I click the element with the id of\n      "session-increment", the value within id="session-length" increments by a\n      value of 1, and I can see the updated value.', function() {
						ie(Array(4).fill(r)),
							a.assert.strictEqual(ue(document.getElementById('session-length')), '29'),
							i(),
							ie([ r ]),
							a.assert.strictEqual(ue(document.getElementById('session-length')), '26');
					}),
					// 17
					it('I should not be able to set a session or break length to\n      <= 0.', function() {
						ie(Array(10).fill(e)),
							a.assert.strictEqual(
								ue(document.getElementById('break-length')),
								'1',
								'Value in element with id of "break-length" is less than 1.'
							),
							i(),
							ie(Array(30).fill(t)),
							a.assert.strictEqual(
								ue(document.getElementById('session-length')),
								'1',
								'Value in element with id of "session-length" is less than 1.'
							);
					}),
					// 18
					it('I should not be able to set a session or break length to\n      > 60.', function() {
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
					}),
					// 19
					it('When I first click the element with id="start_stop", the\n      timer should begin running from the value currently displayed in\n      id="session-length", even if the value has been incremented or\n      decremented from the original value of 25.', function() {
						ie([ n ]),
							a.assert.strictEqual(
								u(document.getElementById('time-left').innerText),
								ue(document.getElementById('session-length'))
							);
					}),
					// 20
					it(
						'If the timer is running, the element with the id of\n      "time-left" should display the remaining time in mm:ss format\n      (decrementing by a value of 1 and updating the display every 1000ms).',
						G()(
							z.a.mark(function e() {
								var t, r;
								return z.a.wrap(
									function(e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														this.timeout(2500),
														ie([ n ]),
														(t = l(document.getElementById('time-left').innerText)),
														(e.next = 5),
														ee(1500)
													);
												case 5:
													(r = l(document.getElementById('time-left').innerText)),
														a.assert.isAbove(
															+r,
															+t,
															'25 + 5 clock has started but time displayed is not changing '
														);
												case 7:
												case 'end':
													return e.stop();
											}
									},
									e,
									this
								);
							})
						)
					),
					// 21
					it(
						'If the timer is running and I click the element with\n      id="start_stop", the countdown should pause.',
						G()(
							z.a.mark(function e() {
								var t, r, o;
								return z.a.wrap(
									function(e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														this.timeout(4e3),
														ie([ n ]),
														(t = l(document.getElementById('time-left').innerText)),
														(e.next = 5),
														ee(1500)
													);
												case 5:
													return (
														(r = l(document.getElementById('time-left').innerText)),
														a.assert.notStrictEqual(
															r,
															t,
															'25 + 5 has started but time displayed is not changing'
														),
														ie([ n ]),
														(e.next = 10),
														ee(1500)
													);
												case 10:
													(o = l(document.getElementById('time-left').innerText)),
														a.assert.strictEqual(
															o,
															r,
															'25 + 5 clock has paused but time continued elapsing'
														);
												case 12:
												case 'end':
													return e.stop();
											}
									},
									e,
									this
								);
							})
						)
					),
					// 22
					it(
						'If the timer is paused and I click the element with\n      id="start_stop", the countdown should resume running from the point at\n      which it was paused.',
						G()(
							z.a.mark(function e() {
								var t, r, o, i;
								return z.a.wrap(
									function(e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														this.timeout(6e3),
														ie([ n ]),
														(t = l(document.getElementById('time-left').innerText)),
														(e.next = 5),
														ee(1500)
													);
												case 5:
													return (
														(r = l(document.getElementById('time-left').innerText)),
														a.assert.notStrictEqual(
															r,
															t,
															'25 + 5 clock has started but time displayed is not changing'
														),
														ie([ n ]),
														(e.next = 10),
														ee(1500)
													);
												case 10:
													return (
														(o = l(document.getElementById('time-left').innerText)),
														a.assert.strictEqual(
															o,
															r,
															'25 + 5 clock has paused but time continued elapsing'
														),
														ie([ n ]),
														(e.next = 15),
														ee(1500)
													);
												case 15:
													(i = l(document.getElementById('time-left').innerText)),
														a.assert.isBelow(
															+i,
															+o,
															'25 + 5 clock has resumed but displayed time is not changing '
														);
												case 17:
												case 'end':
													return e.stop();
											}
									},
									e,
									this
								);
							})
						)
					),
					// 23
					it(
						'When a session countdown reaches zero (NOTE: timer MUST\n      reach 00:00), and a new countdown begins, the element with the id of\n      "timer-label" should display a string indicating a break has begun.',
						G()(
							z.a.mark(function e() {
								var r, o, i, s;
								return z.a.wrap(
									function(e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														this.timeout(1e5),
														m(),
														ie(Array(60).fill(t)),
														ie([ n ]),
														(r = document.getElementById('timer-label').innerHTML),
														(e.next = 7),
														f()
													);
												case 7:
													return (e.next = 9), p();
												case 9:
													(o = +ue(document.getElementById('break-length'))),
														(i = +u(document.getElementById('time-left').innerText)),
														a.assert.isAtMost(
															i,
															o,
															"Break time didn't start with the correct value."
														),
														(s = document.getElementById('timer-label').innerHTML),
														a.assert.notStrictEqual(
															s,
															r,
															"Timer has reached zero but didn't switch to Break time"
														);
												case 14:
												case 'end':
													return e.stop();
											}
									},
									e,
									this
								);
							})
						)
					),
					// 24
					it(
						'When a session countdown reaches zero (NOTE: timer MUST\n      reach 00:00), a new break countdown should begin, counting down from the\n      value currently displayed in the id="break-length" element.',
						G()(
							z.a.mark(function e() {
								var r, o, i, s;
								return z.a.wrap(
									function(e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														this.timeout(1e5),
														m(),
														ie(Array(60).fill(t)),
														ie([ n ]),
														(r = document.getElementById('timer-label').innerHTML),
														(e.next = 7),
														f()
													);
												case 7:
													return (e.next = 9), p();
												case 9:
													(o = document.getElementById('timer-label').innerHTML),
														a.assert.notStrictEqual(
															o,
															r,
															"Timer has reached zero but didn't switch to Break time"
														),
														(i = +ue(document.getElementById('break-length'))),
														(s = +u(document.getElementById('time-left').innerText)),
														a.assert.strictEqual(
															s,
															i,
															"Timer has switched to Break time, but it didn't start with the correct value."
														);
												case 14:
												case 'end':
													return e.stop();
											}
									},
									e,
									this
								);
							})
						)
					),
					// 25
					it(
						'When a break countdown reaches zero (NOTE: timer MUST reach\n      00:00), and a new countdown begins, the element with the id of\n      "timer-label" should display a string indicating a session has begun.',
						G()(
							z.a.mark(function r() {
								var o, i;
								return z.a.wrap(
									function(r) {
										for (;;)
											switch ((r.prev = r.next)) {
												case 0:
													return (
														this.timeout(2e5),
														m(),
														ie(Array(60).fill(t)),
														ie(Array(60).fill(e)),
														ie([ n ]),
														(r.next = 7),
														f()
													);
												case 7:
													return (r.next = 9), p();
												case 9:
													return (
														(o = document.getElementById('timer-label').innerHTML),
														(r.next = 12),
														f()
													);
												case 12:
													return (r.next = 14), p();
												case 14:
													(i = document.getElementById('timer-label').innerHTML),
														a.assert.notStrictEqual(
															i,
															o,
															"Timer has reached zero but didn't switch back to Session time."
														);
												case 16:
												case 'end':
													return r.stop();
											}
									},
									r,
									this
								);
							})
						)
					),
					// 26
					it(
						'When a break countdown reaches zero (NOTE: timer MUST\n      reach 00:00), a new session countdown should begin, counting down from\n      the value currently displayed in the id="session-length" element.',
						G()(
							z.a.mark(function r() {
								var o, i, s, l;
								return z.a.wrap(
									function(r) {
										for (;;)
											switch ((r.prev = r.next)) {
												case 0:
													return (
														this.timeout(2e5),
														m(),
														ie(Array(60).fill(t)),
														ie(Array(60).fill(e)),
														ie([ n ]),
														(r.next = 7),
														f()
													);
												case 7:
													return (r.next = 9), p();
												case 9:
													return (
														(o = document.getElementById('timer-label').innerHTML),
														(r.next = 12),
														f()
													);
												case 12:
													return (r.next = 14), p();
												case 14:
													(i = document.getElementById('timer-label').innerHTML),
														a.assert.notStrictEqual(
															i,
															o,
															"Timer has reached zero but didn't switch back to Session time."
														),
														(s = +ue(document.getElementById('session-length'))),
														(l = +u(document.getElementById('time-left').innerText)),
														a.assert.strictEqual(
															l,
															s,
															"Timer has switched back to Session time, but it didn't start with the correct value."
														);
												case 19:
												case 'end':
													return r.stop();
											}
									},
									r,
									this
								);
							})
						)
					);
			}), // 27
			describe('#Audio', function() {
				it(
					'When a countdown reaches zero (NOTE: timer MUST reach\n      00:00), a sound indicating that time is up should play. This should\n      utilize an HTML5 <audio> tag and have a corresponding id="beep".',
					G()(
						z.a.mark(function e() {
							return z.a.wrap(
								function(e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													this.timeout(1e5),
													a.assert.isNotNull(
														document.querySelector('audio#beep'),
														'There is no audio tag with ID "beep" on the page.'
													),
													m(),
													ie(Array(60).fill(t)),
													ie([ n ]),
													(e.next = 7),
													f()
												);
											case 7:
												return y(), (e.next = 10), ee(200);
											case 10:
												a.assert.isFalse(
													document.getElementById('beep').paused,
													'Timer has reached zero but audio is not playing while it should.'
												);
											case 11:
											case 'end':
												return e.stop();
										}
								},
								e,
								this
							);
						})
					)
				),
					// 28
					it(
						'The audio element with id="beep" must be 1 second or\n      longer.',
						G()(
							z.a.mark(function e() {
								var t;
								return z.a.wrap(function(e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												if (
													((t = document.querySelector('audio#beep')),
													a.assert.isNotNull(
														t,
														'There is no audio tag with ID "beep" on the page.'
													),
													0 !== t.readyState)
												) {
													e.next = 5;
													break;
												}
												return (
													(e.next = 5),
													new Promise(function(e) {
														var r = t.addEventListener('loadeddata', function() {
															t.readyState > 0 &&
																(t.removeEventListener('loadeddata', r), e());
														});
													})
												);
											case 5:
												a.assert.isAbove(
													document.getElementById('beep').duration,
													1,
													'Audio element with id="beep" is not at least 1 second long.'
												);
											case 6:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						)
					),
					// 29
					it('The audio element with id of "beep" must stop playing and\n      be rewound to the beginning when the element with the id of "reset" is\n      clicked.', function() {
						document.getElementById('beep').play(),
							i(),
							a.assert.isTrue(
								document.getElementById('beep').paused,
								'Audio element was not stopped when reset was clicked.'
							),
							a.assert.strictEqual(
								document.getElementById('beep').currentTime,
								0,
								'Audio element was not rewound when reset was clicked. HINT: use the currentTime property of the audio element to rewind.'
							);
					});
			});
	});
}
