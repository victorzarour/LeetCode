/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    
    for (let char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else set.add(char);
    }
    return count + (set.size > 0 ? 1 : 0);
};