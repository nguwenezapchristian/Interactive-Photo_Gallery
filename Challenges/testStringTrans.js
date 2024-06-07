const transformString = require('./stringTransform');

// Test cases
const testCases = [
    { input: "Hamburger", expected: "regrubmaH" },
    { input: "Pizza", expected: "80 105 122 122 97" },
    { input: "Chocolate Chip Cookie", expected: "eikooCpihCetalocohC" },
    { input: "Hello World", expected: "72 101 108 108 111 32 87 111 114 108 100" },
    { input: "FizzBuzz", expected: "BuzzFizz" },
    { input: "Short", expected: "83 104 111 114 116" },
];

// Function to run test cases
function runTests() {
    testCases.forEach((testCase, index) => {
        const result = transformString(testCase.input);
        const passed = result === testCase.expected;
        console.log(`Test Case ${index + 1}: ${passed ? "PASSED" : `FAILED (Expected: ${testCase.expected}, Got: ${result})`}`);
    });
}

// Run tests
runTests();