// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validPhone = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	
	it("Input is required", function(){
		assert.isTrue(validPhone(4444444444));
	});

	it("Empty or '' should fail", function() {
		assert.isFalse(validPhone(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validPhone(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validPhone('  '));
	});

	it("The word null should fail", function() {
		assert.isFalse(validPhone('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validPhone('undefined'));
	});

	it("Input must be numeric", function() {
		assert.isFalse(validPhone('a'));
	});

	it("Input must be integers", function() {
		assert.isFalse(validPhone(4.2));
	});

	it("Input must be 10 numbers", function() {
		assert.isFalse(validPhone(555555));
	});

	it("If over 10 should fali", function() {
		assert.isFalse(validPhone(55555555555));
	});
	
});//end Testing Valid Phone Number