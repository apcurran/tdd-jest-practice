const calc = require("./calc");

test("Add two numbers", () => {
    expect(calc.add(2, 3)).toBe(5);
});

test("Subtract two numbers", () => {
    expect(calc.subtract(6, 3)).toBe(3);
});

test("Multiply two numbers", () => {
    expect(calc.multiply(8, 2)).toBe(16);
});

test("Divide two numbers", () => {
    expect(calc.divide(10, 2)).toBe(5);
});