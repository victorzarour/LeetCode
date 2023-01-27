/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i)
        if (rotated === goal) return true
    }
    return false
};