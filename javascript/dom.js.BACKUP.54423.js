<<<<<<< HEAD

///////////////////////////////////////////////
// Name: dom.js
// Author: Michael Rundel 
// Description: DOM manipulation helper functions
// 22.08.2011
///////////////////////////////////////////////

brg4.setFormElementValueById = function(id, val){
	document.getElementById(id).value = val;
}

brg4.selectOptionByValue = function(selObjName, val){
	var selObj = document.getElementsByName(selObjName)[0];
	var opt = selObj.options;
	for(var i = 0; i < opt.length; i++) {
		if (opt[i].value == val) {
			selObj.selectedIndex = i;
			break;
		}
	}
}
=======

///////////////////////////////////////////////
// Name: dom.js
// Author: Michael Rundel 
// Description: DOM manipulation helper functions
// 22.08.2011
///////////////////////////////////////////////

brg4.setFormElementValueById = function(id, val){
	document.getElementById(id).value = val;
}

// usage: selectOptionByValue(nameOfFormElement, valueOfSelectOption)
brg4.selectOptionByValue = function(selObjName, val){
	var selObj = document.getElementsByName(selObjName)[0];
	var opt = selObj.options;
	for(var i = 0; i < opt.length; i++) {
		if (opt[i].value == val) {
			selObj.selectedIndex = i;
			break;
		}
	}
}
>>>>>>> c3ce5f352453e1dc20fa6d19db8c929cdae74261
