function transformString(inputString) {
    // Check if the length of the string is divisible by 3, 5, or both
    const length = inputString.length;

    // Implement transformation rules
    if (length % 3 === 0 && length % 5 === 0) {
        // If divisible by both 3 and 5, perform operations in the specified order
        return replaceWithASCII(reverseString(inputString));
    } else if (length % 3 === 0) {
        // If divisible by 3, reverse the string
        return reverseString(inputString);
    } else if (length % 5 === 0) {
        // If divisible by 5, replace each character with its ASCII code
        return replaceWithASCII(inputString);
    } else {
        // If not divisible by 3 or 5, return the original string
        return inputString;
    }
}

// Function to reverse a string
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != ' ')
        reversedStr += str[i];
    }
    return reversedStr;
}

// Function to replace each character with its ASCII code
function replaceWithASCII(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) + ' ';
    }
    // Remove trailing space
    return result.trim();
}

// Export the function for testing
module.exports = transformString;