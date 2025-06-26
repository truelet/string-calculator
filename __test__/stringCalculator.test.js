const { add } = require('../stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return same number when we have only single string', () => {
        expect(add("1")).toBe(1);
        expect(add("3")).toBe(3);
    });

    test('should return sum of the strings when we have multiple strings', () => {
        expect(add("1,5")).toBe(6);
        expect(add("3,2")).toBe(5);
    });

    test('should return sum of the strings with new line delimiters', () => {
        expect(add("1\n5")).toBe(6);
        expect(add("4,3\n1")).toBe(8);
    });

    test('should return sum of the strings with any delimiters as per the regex', () => {
        expect(add("//;\n1;5")).toBe(6);
        expect(add("//-\n4-3-1")).toBe(8);
        expect(add("//@\n4@3@1")).toBe(8);
    });

    test('should return error with negative numbers when negative numbers passed in string', () => {
        expect(() => add("1,-5").toThrow("negative numbers not allowed -5"));
        expect(() => add("-4,-3,1").toThrow("negative numbers not allowed -4,-3"));
    });

    test('should return error with single negative number', () => {
        expect(() => add("-5").toThrow("negative numbers not allowed -5"));
    });

    test('should return 0 when having custom delimiter without numbers', () => {
        expect(add("//;\n")).toBe(0);
    });
});