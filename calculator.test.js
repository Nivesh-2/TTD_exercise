const Calculator = require('./calculator');

test("Expected 2 for add 1 and 1", ()=>{
    const calculator = new Calculator();
    let value = calculator.add(1, 1);
    let expected_value = 2;
    expect(value).toBe(expected_value);
});

test("Expected 5 for add 2 and 3", ()=>{
    const calculator = new Calculator();
    let value = calculator.add(2, 3);
    let expected_value = 5;
    expect(value).toBe(expected_value);
});

test("Expected 4Bill for add 2Bill and 2Bill", ()=>{
    const calculator = new Calculator();
    let value = calculator.add(2*Math.pow(10, 9), 2*Math.pow(10, 9));
    let expected_value = 4*Math.pow(10, 9);
    expect(value).toBe(expected_value);
});

test("Expected 2 for diff 4 and 2", ()=>{
    const calculator = new Calculator();
    let value = calculator.subtract(4, 2);
    let expected_value = 2;
    expect(value).toBe(expected_value);
});

test("Expected 16 for multiplication 4 and 4", ()=>{
    const calculator = new Calculator();
    let value = calculator.multiplication(4, 4);
    let expected_value = 16;
    expect(value).toBe(expected_value);
});


test("Expected 0.75 for Division 3 and 4", ()=>{
    const calculator = new Calculator();
    let value = calculator.division(3, 4);
    let expected_value = 0.75;
    expect(value).toBe(expected_value);
});

