# string-calculator
-------------------

**Steps to start project**

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run tests**
    ```bash
    npm test
    ```


**Requirements Covered**

1. Input: “”, Output: 0
2. Input: “1”, Output: 1
3. Input: “1,5”, Output: 6
4. Allow the add method to handle any amount of numbers.
5. Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)
6. Support different delimiters:
    To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
7. Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".
    If there are multiple negative numbers, show all of them in the exception message, separated by commas.
8. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
9. Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1***2***3” should return - this also covered if we ignore the capital breackets[] from regex.