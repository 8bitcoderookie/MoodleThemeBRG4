///////////////////////////////////////////////
// Name: schuljahr.js
// Author: Michael Rundel 
// Description: functions related to date in austrian school calendar
// 22.08.2011
///////////////////////////////////////////////

///////////////////////////////////////////////
// Beginn des aktuellen Schuljahres ermitteln
///////////////////////////////////////////////

brg4.getSchulJahrBeginn = function() {
	var schuljahrBeginn = new Date();
	if (schuljahrBeginn.getMonth() < 6) { // 0 (Jan) ... 11 (Dez) (bis inklusive Juni wird der Beginn des letzten Schuljahres genommen...)
		schuljahrBeginn.setFullYear(schuljahrBeginn.getFullYear()-1);
	}
	schuljahrBeginn.setDate(1);
	schuljahrBeginn.setMonth(8); // September!!!
	var daySchoolBegins;
	var weekday = schuljahrBeginn.getDay(); // 0 (for Sunday) through 6 (for Saturday)
	if (weekday == 0) {
		weekday = 7;
	}
	if (weekday == 1) {
		schuljahrBeginn.setDate(1);
	}
	else {
		schuljahrBeginn.setDate(9-weekday);
	}
	return schuljahrBeginn;
}

