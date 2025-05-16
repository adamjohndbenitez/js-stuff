const { default: TestRunner } = require("jest-runner");
const addFive = require('./addFive');

test1('returns the number plus five', () => {
    expect(addFive(0)).toBe(5);
    expect(addFive(1)).toBe(6);
    expect(addFive(-1)).toBe(4);
    expect(addFive(100)).toBe(105);
});