///////////////////////////////////////////////
// Name: submissionCommentsDefaultChecked.js
// Author: Michael Rundel 
// Description: set submission comments as default checked
// Date: 30.09.2013
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	// restrict to new assignments
	if (location.search.indexOf('add=assign') != -1) {
		Y.one('#id_assignsubmission_comments_enabled').set('checked',true);
	}
});
