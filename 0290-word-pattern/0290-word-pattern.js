/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ")
    const map1 = new Map(), map2 = new Map()
    
    if (pattern.length !== s.length) return false
    
    for (let i = 0; i < pattern.length; i++) {
        map1.set(pattern[i], s[i])
        map2.set(s[i], pattern[i])
    }
    
    for (let i = 0; i < pattern.length; i++) {
        if (s[i] !== map1.get(pattern[i]) || pattern[i] !== map2.get(s[i])) return false
    }
    
    return true
};