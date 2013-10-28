///////////////////////////////////////////////
// Name: kursbereichAnlegen.js
// Author: Michael Rundel 
// Description: Fills Moodle Course Category Form with values
// 05.09.2011
// 28.08.2013 - YUI3 rewrite
///////////////////////////////////////////////

YUI().use('node', function (Y) {
	var uri = window.location.href;
	if (uri.search(/parent=0/) != -1) { // create new top level course category...
		var schuljahrBeginn = brg4.getSchulJahrBeginn();
		var schuljahrString = schuljahrBeginn.getFullYear()+"/"+String(schuljahrBeginn.getFullYear()+1).substr(2)
		Y.one('#id_name').set('value', 'Schuljahr '+schuljahrString);		
		Y.one('#id_description_editor').set('value','<p>Alle Kurse im Schuljahr '+schuljahrString+'</p>');		
		alert("Du bist im Begriff eine neue Kurs Kategorie im Hauptverzeichnis anzulegen.\nBeachte, dass dort nur Schuljahr (z.B. 'Schuljahr 2011/12') Kategorien angelegt werden sollten!!!");
	}
	else if (uri.search(/parent=/) != -1) { // create new course category...
		var schuljahrBeginn = brg4.getSchulJahrBeginn();
		var schuljahrString = schuljahrBeginn.getFullYear()+"/"+String(schuljahrBeginn.getFullYear()+1).substr(2)
		var gegenstandLang = prompt('Gegenstand (Langform)','Mediendesign').trim();
		Y.one('#id_name').set('value', gegenstandLang);		
		Y.one('#id_description_editor').set('value', '<p>Alle '+gegenstandLang+' Kurse im Schuljahr '+schuljahrString+'</p>');		
	}
});

