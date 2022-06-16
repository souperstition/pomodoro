// test #8
function ie(e) {
	ae(e).forEach(function(e) {
		e && 'function' == typeof e.click && e.click();
		console.log('clicked');
	});
}

function ae(e) {
	return e.map(function(e) {
		return document.getElementById(e);
	});
}

ie(Array(35).fill('session-increment'));
