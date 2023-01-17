/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
	let flips = 0, ones = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "1") ones++
		else if (ones > 0){
			flips++
			ones--
		}
	}
	return flips
};