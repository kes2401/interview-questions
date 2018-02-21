// Given a string, return a new string with the reversed order of characters

function reverse(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}

// This function takes the provided string and splits it into an array of characters
// before then using the reduce() function to reduce the array down to a single value.
// This solution also uses ES2015 arrow functions syntax.