# Interactive Photo Gallery

This repository contains an interactive photo gallery along with solutions to two coding challenges. The gallery is built using HTML, CSS, and JavaScript, and is designed to be responsive and cross-browser compatible. The coding challenges demonstrate array manipulation and string transformation skills.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Photo Gallery](#photo-gallery)
- [Coding Challenges](#coding-challenges)
  - [Challenge 1: Array Manipulation](#challenge-1-array-manipulation)
  - [Challenge 2: String Transformation](#challenge-2-string-transformation)
- [Project Structure](#project-structure)

## Setup Instructions

1. **Clone the Repository**
   ```sh
   git clone https://github.com/nguwenezapchristian/interactive-photo-gallery.git
   cd interactive-photo-gallery
   ```

2. **Install Dependencies**
   This project uses `normalize.css` to ensure cross-browser compatibility. Install it via npm:
   ```sh
   npm install normalize.css
   ```

3. **Open the Gallery**
   Open `index.html` in your web browser to view the interactive photo gallery.
   or use the live url: (https://nguwenezapchristian.github.io/Interactive-Photo_Gallery/)

4. **Run Coding Challenge Tests**
   Navigate to the `Challenges` directory and run the test files using Node.js:
   ```sh
   node Challenges/testStringTrans.js
   ```

## Photo Gallery

The interactive photo gallery is designed to adapt seamlessly to different screen sizes and devices, ensuring a responsive user experience. It supports image enlargement on click and smooth transitions between images. The gallery includes the following features:
- **Responsive Design**: Adjusts layout based on screen size.
- **Cross-Browser Compatibility**: Ensures consistent performance across modern web browsers.
- **Clean and Readable Code**: Follows best practices and coding conventions for HTML, CSS, and JavaScript.

## Coding Challenges

### Challenge 1: Array Manipulation

#### Problem Statement
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

#### Example
Input: `arr = [4, 2, 7, 1, 9, 5]`, `target = 17`
Output: `true`
Explanation: The subarray `[7, 1, 9]` sums up to 17, which is equal to the target.

#### Solution
The solution uses a sliding window approach to efficiently find the contiguous subarray with the target sum, adhering to the O(n) time complexity requirement.

### Challenge 2: String Transformation

#### Problem Statement
Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the specified order.

#### Examples
- Input: `"Hamburger"`
  Output: `"regrubmaH"`
- Input: `"Pizza"`
  Output: `"80 105 122 122 97"`
- Input: `"Chocolate Chip Cookie"`
  Output: `"eikooCpihCetalocohC"`

#### Solution
The solution implements transformation rules using basic string and array manipulation techniques, ensuring an O(n) time complexity.

## Project Structure

```plaintext
.
├── Challenges
│   ├── arrayMap.js          # Solution for Array Manipulation challenge
│   ├── stringTransform.js   # Solution for String Transformation challenge
│   └── testStringTrans.js   # Test cases for String Transformation
├── gallery
│   ├── common_brown_baboon.jpeg
│   ├── fennec_fox.jpeg
│   ├── humpback_whale.jpeg
│   └── spotted_deer.jpeg
├── index.html               # Main HTML file for the photo gallery
├── node_modules             # Directory for installed npm packages (normalize.css)
├── package.json             # npm package configuration
├── package-lock.json        # npm package lock file
├── README.md                # This README file
├── script.js                # JavaScript file for interactive functionality
└── styles.css               # CSS file for styling the gallery
```

## Contact

For any questions or feedback, feel free to reach out to me at [LinkedIn](www.linkedin.com/in/nguweneza-p-christian-136966136).