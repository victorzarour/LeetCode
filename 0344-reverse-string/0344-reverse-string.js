/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0, last = s.length - 1; i < last; i++, last--){
        [s[i], s[last]] = [s[last], s[i]]
    }
};