// Given a string, return true if the string is a palindrome or false if it is not. 
// Palindromes are strings that form the same word if it is reversed.
// *Do* include spaces and punctuation in determining if the string is a palindrome.
// -Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	const newStr = str.split('').reverse().join('');
	return str === newStr;
}

// This function takes the provided string and reverses it before returning a boolean
// value depending on the comparison of the reversed string with the provided string.