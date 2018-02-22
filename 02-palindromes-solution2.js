// Given a string, return true if the string is a palindrome or false if it is not. 
// Palindromes are strings that form the same word if it is reversed.
// *Do* include spaces and punctuation in determining if the string is a palindrome.
// -Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}

// This function takes the provided string and splits it into an array before calling
// the every() array function to test every element in the array against its opposite
// element in the array, for example, the first item against the last item, then the
// second item again the second last item.
// Once it get passed the midpoint of the array however it is re-testing the remaining
// elements against their opposite elements again, so it is doing twice the work that
// is really needed for the result, so it is not the ideal solution to this problem.