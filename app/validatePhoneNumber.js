var validPhone = function(inputValue) {
	inputValue += "";
	if(inputValue.trim() == "" || inputValue == 'null' || inputValue == 'undefined'){
		return false;
	}
	else{
		if (isNaN(inputValue) || inputValue % 1 != 0 || inputValue.length < 10 || inputValue.length > 10) {
			return false;
		} else {
			return true;
		}
	}
}

module.exports = validPhone;