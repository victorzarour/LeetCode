/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()
    
    for (let word of s){
        map.set(word, map.get(word) + 1 || 1)
    }
    
    for (let word of t){
        if (map.get(word)) map.set(word, map.get(word) - 1)
        else map.set(word, 1)
    }
    
    for (let count of map.values()){
        if (count !== 0) return false
    }
    
    return true
    
};