/**
 * Calculates the sum of numbers provided in a string.
 * This is the initial empty implementation.
 * @param {string} numbers - The input string.
 * @returns {number} The sum of the numbers.
 */
const add = (numbers) => {
    if (!numbers) {
        return 0;
    }
    const numberList = numbers.split(',');
    if (numberList.length === 1) {
        return parseInt(numberList[0]);
    }
    return numberList.reduce((sum, num) => sum + parseInt(num), 0);
};

module.exports = { add };