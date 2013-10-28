///////////////////////////////////////////////
// Name: jumpToCurrentTopic.js
// Author: Michael Rundel 
// Description: When displaying course topics jump to current topic
// Date: 19.08.2013
// 22.08.2013 - YUI3 implementation
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	if (window.location.hash == '') {
		window.location.hash = '#'+Y.one('.current').get('id');
	}
});

