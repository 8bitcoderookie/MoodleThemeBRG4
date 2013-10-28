///////////////////////////////////////////////
// Name: courseRequest.js
// Author: Michael Rundel 
// Description: inject information to course request form
// Date: 24.08.2013
// works with: Moodle 2.5
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	var infoText = 'Für den Kursantrag bitte unbedingt folgende Informationen eintragen:\n';
	infoText +=    '<dl><dt><strong>Welche Schüler:</strong></dt><dd>z.B. 6a, 7ab, 6ab Spanisch oder 8a Biologie Schwerpunkt</dd>\n';
	infoText +=    '<dt><strong>Welche Lehrer:</strong></dt><dd> falls es noch Team-Teacher gibt bitte hier anführen.</dd></dl>\n';
	Y.one('label[for=id_reason]').setHTML(infoText);
});

