const reverseStr = require("./reverse-string");

test("Reverses a string", () => {
    expect(reverseStr("taco")).toBe("ocat");
});