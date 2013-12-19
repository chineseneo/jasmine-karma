var Computer = function(calculator) {
  add = function(num1, num2) {
    return calculator.add(num1, num2);
  }

  return {
    "add": add
  }
}