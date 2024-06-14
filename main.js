// Assalamualaikum @everyone 👋
// 🚀 Day 29 Challenge: Start Coding! 🚀
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function findCodePosition(str) {
    return str.indexOf("code");
}
console.log(findCodePosition("Please try to code yourself."));
console.log(`\n`);
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function textPresence(str) {
    return str.includes("JavaScript");
}
console.log(textPresence("You should code in JavaScript."));
console.log(`\n`);
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractingSubstring(str) {
    return str.substring(0, 10);
}
console.log(extractingSubstring("I Love you typeScript."));
export {};
