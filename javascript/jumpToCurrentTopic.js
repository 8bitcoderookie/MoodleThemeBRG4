///////////////////////////////////////////////
// Name: jumpToCurrentTopic.js
// Author: Michael Rundel 
// Description: When displaying course topics jump to current topic
// Date: 19.08.2013
// - 28.10.2013: Bugfix: no JS error when there is no current topic
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	if (window.location.hash == '') {
		var firstCurrentTopics = Y.one('.current');
		if (firstCurrentTopics) { // might be null
			window.location.hash = '#'+firstCurrentTopics.get('id');
		}
	}
});

