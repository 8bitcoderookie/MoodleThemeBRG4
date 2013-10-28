///////////////////////////////////////////////
// Name: markDownAsDefaultTextAreaInputFormat.js
// Author: Michael Rundel 
// Description: Sets Markdown as the default input format 
//     for textarea elements if 'When editing text' is set to 
//     'Use standard web forms' in the user profile
// Date: 27.08.2013
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	Y.all("#menusummary_editorformat option").each( function(optionNode) {
	   if (optionNode.get('text').indexOf("Markdown") != -1) {
			optionNode.set('selected','selected');
	   }
	});
});
