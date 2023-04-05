/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = new Map()
    
    for (let letter of s) {
        map.set(letter, map.get(letter) + 1 || 1)
    }
    
    const array = Array.from(map.values()), value = array[0]
    
    for (let int of array) {
        if (int !== value) return false
    }
    return true    
};