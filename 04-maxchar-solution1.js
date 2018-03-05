// Given a string, return the character that is most commonly used in the string.
// - Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	let charMap = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	for (let char in charMap) {
		if(charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

// This function creates a character map from the string provided where each key
// is a letter from the string and the value of each key is how many times the
// letter appeared in the string.
// The function then iterates over the character map object and checks and, if
// necessary, sets the max variable and the character matching that max value.
// The function finally returns the character with the highest value in the
// character map object.