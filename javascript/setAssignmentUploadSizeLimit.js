///////////////////////////////////////////////
// Name: Set Moodle Assignment Upload Size Limit
// Author: Michael Rundel 
// Description: by default id_assignsubmission_file_maxsizebytes is set to the maximum site upload limit. 
//              This script changes the value to a lower value by default.
// 09.12.2014
///////////////////////////////////////////////


YUI().use('node', function (Y) {
	// todo: test maximum value and change only if higher...
	brg4.selectOptionByValue("assignsubmission_file_maxsizebytes", '10485760'); // set limit to 10M
});

