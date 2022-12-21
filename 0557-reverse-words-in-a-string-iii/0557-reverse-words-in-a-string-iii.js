/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const split = s.split(" ").map(word => word.split("").reverse().join(""))
    
    return split.join(" ")
};