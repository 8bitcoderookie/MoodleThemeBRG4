///////////////////////////////////////////////
// Name: Moodle Course Autofill Hack
// Author: Michael Rundel 
// Description: looks for fragment identifier in the URI and uses the string as username.
// 22.08.2011
// 28.08.2013 - Rewritten in YUI3
///////////////////////////////////////////////

// alert("loginInsertUserName");

YUI().use('node', function (Y) {
	if (window.location.hash.length > 0) {
		Y.one('#username').set('value',decodeURIComponent(window.location.hash.substr(1)));
		Y.one('#password').getDOMNode().focus();
	}
	else {
		// select() and focus() are plain js function, hence not chainable.
		Y.one('#username').getDOMNode().focus();
		Y.one('#username').getDOMNode().select();
	}
});

