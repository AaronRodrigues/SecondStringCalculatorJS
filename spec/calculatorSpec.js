describe ("Calculator", function() {
  var calculator;

  beforeEach(function(){
    calculator = new Calculator;
  });

  it("returns 0 if empty string is passed", function() {
    expect(calculator.add("")).toEqual 0;       
  });
});