///////////////////////////////////////////////
// Name: editAccessKeys.js
// Author: Michael Rundel 
// Description: Add access key to Login/Logout-Link:
//              IExplore ALT+L; Firefox ALT+SHIFT+L
// Date: 19.08.2013
// 27.08.2013 - YUI3 rewritten
///////////////////////////////////////////////

// alert("logonAccessKeys");

// Y.all() does exit gracefully on empty Node Lists, while 
// Y.one() issues a null error. 
// But this workaround does not work here since there are more 
// than one link login/logout links on a moodle page

YUI().use('node', function (Y) {
	var loginLink = Y.one('a[href*="/login/index.php"]');
	var logoutLink = Y.one('a[href*="/login/logout.php"]');
	if (loginLink != null) {
		loginLink.set('accessKey','L');
	}
	else {
		if (logoutLink != null) {
			logoutLink.set('accessKey','L');
		}
	}
});


