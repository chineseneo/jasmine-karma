describe("spyOn", function() {
  var computer, calculator;

  beforeEach(function() {
    calculator = new Calculator();
    computer = new Computer(calculator);
  })

  it("should be able to use mock", function() {
    spyOn(calculator, "add");
    computer.add(1, 2);
    computer.add(3, 4);
    expect(calculator.add).toHaveBeenCalledWith(1,2);
    expect(calculator.add).toHaveBeenCalledWith(3,4);
    expect(calculator.add.calls.length).toBe(2);
  })

  it("should be able to use stub", function() {
    spyOn(calculator, 'add').andReturn(4);
    expect(computer.add(2, 2)).toBe(4);
  })
})