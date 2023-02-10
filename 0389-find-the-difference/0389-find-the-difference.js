/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map()
    
    for (let letter of t) {
        map.set(letter, map.get(letter) + 1 || 1)
    }
    
    for (let letter of s) {
        map.set(letter, map.get(letter) - 1)
    }

    for (let [ key, value ] of map) {
        if (value !== 0) return key
    }
};