describe("describe & it", function() {
  it("should be able to add", function() {
    var calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  });

  it("should be able to subtract", function() {
    var calculator = new Calculator();
    expect(calculator.subtract(2, 3)).toBe(-1);
  });

  it("should be able to multiply", function() {
    var calculator = new Calculator();
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it("should be able to divide", function() {
    var calculator = new Calculator();
    expect(calculator.divide(42, 6)).toBe(7);
  });
});