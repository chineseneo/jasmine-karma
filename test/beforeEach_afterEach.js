describe("beforeEach & afterEach", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be able to add", function() {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it("should be able to subtract", function() {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });

  it("should be able to multiply", function() {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it("should be able to divide", function() {
    expect(calculator.divide(42, 6)).toBe(7);
  });

  afterEach(function() {
    delete calculator
  });
});