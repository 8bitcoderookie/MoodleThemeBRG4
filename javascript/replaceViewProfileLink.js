///////////////////////////////////////////////
// Name: replaceViewProfileLink.js
// Author: Michael Rundel
// Description: replaces profile view with profile edit link
// Date: 30.09.2013
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	var profileLinks = Y.all('.logininfo a[href*="/user/profile.php"]');
	profileLinks.each(function (lnk) {
		lnk.set('href',lnk.get('href').replace('/user/profile.php','/user/edit.php'));
	});
});
