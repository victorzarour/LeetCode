/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    last = s.length - 1
    
    for (let i = 0; i < last; i++){
        [s[i], s[last]] = [s[last], s[i]]
        last--
    }

};