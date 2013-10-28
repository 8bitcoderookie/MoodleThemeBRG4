///////////////////////////////////////////////
// Name: syncCutOffDate.js
// Author: Michael Rundel 
// Description: Remove Checkbox check and focusing Textfield
// Date: 30.09.2013
///////////////////////////////////////////////

YUI().use('node', 'event', function (Y) {
	var chkbx = Y.one("#id_cutoffdate_enabled");
	chkbx.on("change", function (e) {
		if (e.target.get("checked")) {
			// alert("checked");
			Y.one('#id_cutoffdate_day').set('selectedIndex',Y.one('#id_duedate_day').get('selectedIndex'));
			Y.one('#id_cutoffdate_month').set('selectedIndex',Y.one('#id_duedate_month').get('selectedIndex'));
			Y.one('#id_cutoffdate_year').set('selectedIndex',Y.one('#id_duedate_year').get('selectedIndex'));
			Y.one('#id_cutoffdate_hour').set('selectedIndex',Y.one('#id_duedate_hour').get('selectedIndex'));
			Y.one('#id_cutoffdate_minute').set('selectedIndex',Y.one('#id_duedate_minute').get('selectedIndex'));
		}
	});
});

