const { add } = require('../stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return same number when we have only single string', () => {
        expect(add("1")).toBe(1);
        expect(add("3")).toBe(3);
    });
});