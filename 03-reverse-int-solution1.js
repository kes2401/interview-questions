// Given an integer, return an integer that is the reverse ordering of numbers.
// The end result should produce a number, not a string.
// -Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
	
}