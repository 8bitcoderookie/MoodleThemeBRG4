///////////////////////////////////////////////
// Name: editAccessKeys.js
// Author: Michael Rundel 
// Description: Add access key to course edit on/off: 
//              IExplore ALT+E; Firefox ALT+SHIFT+E
// Date: 19.08.2013
// 27.08.2013 - YUI3 rewrite
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	Y.one('a[href*="&edit="]').set('accessKey','E');
});

