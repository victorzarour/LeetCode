/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.split(" ")
    let count = 0
    for (let segment of s) {
        if (segment.length) count++
    }
    return count
};