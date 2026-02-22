// Question 1: The Classic Palindrome

// The Prompt: Write a function isPalindrome(str) that takes a string and returns true if it reads the same forwards and backwards, and false if it doesn't.

// Examples:
// isPalindrome("racecar") => true
// isPalindrome("level") => true
// isPalindrome("hello") => false

// Constraints:
// You must do this in-place (O(1) space complexity). You cannot use built-in JavaScript methods like .split().reverse().join(). You must use Two Pointers.
// The string will only contain lowercase English letters (no spaces or punctuation to worry about).
// The string length will be between 1 and 100,000 characters.

function isPalindrome(str) {
	let leftP = 0;
	let rightP = str.length - 1;

	while (leftP < rightP) {
		if (str[leftP] !== str[rightP]) {
			return false;
		} else {
			leftP++;
			rightP--;
		}
	}

	return true;
}

// const result = isPalindrome("racecar"); // => true
// isPalindrome("level"); // => true
const result = isPalindrome("radzr"); // => false

console.log(result);
