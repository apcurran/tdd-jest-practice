const capitalize = require("./capitalize");

test("Returns the given word capitalized", () => {
    expect(capitalize("alex")).toBe("Alex");
});