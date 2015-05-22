
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
