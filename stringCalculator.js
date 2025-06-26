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
    
    // Check for custom delimiter
    if(numbers.slice(0, 2) === '//') {
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiter = numbers.slice(2, delimiterEndIndex);
        const newNumbers = numbers.split('\n')[1];
        numbers = newNumbers.replaceAll(delimiter, ',');
    }
    // Replace new line characters with commas to handle both delimiters
    numbers = numbers.replace(/\n/g, ',');
    
    // Split the string by commas to get individual numbers
    const numberList = numbers.split(',');
    
    // handle emtpy number list
    if(numberList.length === 0 || (numberList.length === 1 && numberList[0] === '')) {
        return 0;
    }
    
    // Check for negative numbers
    const negativeNumbers = numberList.filter(num => num < 0);
    if(negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    // Ignore numbers greater than 1000
    const filteredNumbers = numberList.filter(num => parseInt(num) <= 1000);

    if (filteredNumbers.length === 1) {
        return parseInt(filteredNumbers[0]);
    }

    // return the sum of the numbers
    return filteredNumbers.reduce((sum, num) => sum + parseInt(num), 0);
};

module.exports = { add };