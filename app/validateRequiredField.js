// JavaScript Document

// var validPhone = require("validatePhoneNumber");

var validInput = function(inValue){
	inValue += "";	//turns all inValues into strings
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
		return false;
	}
	return true;
}

module.exports = validInput;




/*
var Box = function(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
};

Box.prototype.getVolume = function() {
  return this.length * this.width * this.height;
};

module.exports = Box;

*/

