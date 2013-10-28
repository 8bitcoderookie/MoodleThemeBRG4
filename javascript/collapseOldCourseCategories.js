
///////////////////////////////////////////////
// Name: collapseOldCourseCategories.js
// Author: Michael Rundel 
// Description: collapses all but the first n top course categories on the front page
// Date: 04.02.2012
// 21.08.2013 - rewritten for YUI3
//            - modified to work with Moodle 2.5
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	Y.all('.course_category_tree>.content>.subcategories>.category').each(function (catNode,index) {
		if (index > 1) {
			if (catNode.hasClass('with_children'))  { // ensure correct div...
				if (!catNode.hasClass('collapsed')) { // not already collapsed...
					catNode.addClass('collapsed');
				}
			}
		}
	});
});

