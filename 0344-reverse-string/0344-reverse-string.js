/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0, l = s.length - 1; i < l; i++, l--){
        [s[i], s[l]] = [s[l], s[i]]
    }
};