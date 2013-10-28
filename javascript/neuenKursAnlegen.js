///////////////////////////////////////////////
// Name: Moodle Course Autofill Hack
// Author: Michael Rundel 
// Description: Fills the Moodle Course Form with values
// 22.08.2011
// 28.08.2013 - rewritten in YUI3
// 31.08.2013 - added cleaner solution for teacher list
///////////////////////////////////////////////


YUI().use('node', function (Y) {
	var uri = window.location.href;
	if (uri.search(/id=/) == -1) { // create NEW course only (not editing an already created)...

		// Kursname Abfragen
		var gegenstandLang = prompt('Gegenstand (Langform)','Mediendesign').trim();
		var gegenstand = prompt('Gegenstand (Kurzform)','med').trim().toUpperCase();
		var klassen = prompt('Klassen','7ab').trim().toUpperCase();
		var lehrer = prompt('LehrerInnen','run, tra').trim().toUpperCase();
		var parts = lehrer.split(",");
		// does not work
		// lehrer = Y.Array.map(parts, Y.Lang.trim).join(", "); 
		lehrer = parts.map(String.trim).join(", ");

		// Werte eintragen
		var schuljahrBeginn = brg4.getSchulJahrBeginn();
		var schuljahr = schuljahrBeginn.getFullYear()+String(1+parseInt(String(schuljahrBeginn.getFullYear()).substr(2)));
		var kursName = gegenstand+" "+klassen+" ("+schuljahr+")";
		var kursNameLang = gegenstandLang+" "+klassen+" ("+lehrer+")";
		Y.one('#id_fullname').set('value',kursNameLang);
		Y.one('#id_shortname').set('value',kursName);
		Y.one('#id_idnumber').set('value',schuljahrBeginn.getFullYear()+gegenstand+klassen);
		Y.one('#id_role_3').set('value','Lehrer/in'); // Your word for 'Teacher'
		Y.one('#id_role_5').set('value','Schüler/in'); // Your word for 'Student'
		Y.one('#id_format').set('value','topics');
		Y.one('#id_numsections').set('value','1'); // Number of cource sections (just 1 because Teacher can add sections)
		Y.one('#id_hiddensections').set('value','1'); // Hidden sections are completely invisible
		Y.one('#id_summary_editor').set('value','<p>Lernunterlagen und Aufgaben für '+kursNameLang+'</p>'); // Course summary

		// Course start date
		brg4.selectOptionByValue("startdate[day]", schuljahrBeginn.getDate());
		brg4.selectOptionByValue("startdate[month]", schuljahrBeginn.getMonth()+1);
		brg4.selectOptionByValue("startdate[year]", schuljahrBeginn.getFullYear());
		// document.getElementsByName("enrollable")[0].checked = true;
	}
});

