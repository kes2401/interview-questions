// Given a string, return a new string with the reversed order of characters

function reverse(str) {
	let newStr = '';
	for(let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

// This function creates a new string and going from the end of the provided string
// it takes each letter from back to front of the provided string and adds it to the
// new string.

// You could also use the for-of syntax for the for loop:
//	let newStr = '';
//	for(let char of str){
//		newStr = char + newStr;
//	}
//	return newStr;