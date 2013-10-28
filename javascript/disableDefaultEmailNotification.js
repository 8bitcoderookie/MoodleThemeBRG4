///////////////////////////////////////////////
// Name: disableDefaultEmailNotification.js
// Author: Michael Rundel 
// Description: disables e-mail notification for assignment submissions
// Date: 07.10.2013
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	Y.one('#id_sendnotifications').set('selectedIndex',0);
	Y.one('#id_sendlatenotifications').set('selectedIndex',0);
});
