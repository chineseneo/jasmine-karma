var Calculator = function() {
	add = function(num1, num2) {
		return num1 + num2;
	}

	subtract = function(num1, num2) {
		return num1 - num2;
	}

  multiply = function(num1, num2) {
    return num1 * num2;
  }

  divide = function(num1, num2) {
    return num1 / num2;
  }

	return {
		"add": add,
		"subtract": subtract,
		"multiply": multiply,
    "divide": divide
	}
}