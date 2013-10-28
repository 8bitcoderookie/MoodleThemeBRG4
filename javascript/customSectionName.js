///////////////////////////////////////////////
// Name: customSectionName.js
// Author: Michael Rundel 
// Description: Remove Checkbox check and focusing Textfield
// Date: 19.08.2013
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	Y.one('#id_usedefaultname').removeAttribute('checked');
	Y.one('#id_name').removeAttribute('disabled').getDOMNode().focus();
});
