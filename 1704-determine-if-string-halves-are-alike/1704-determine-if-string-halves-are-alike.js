/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const a = s.slice(0, s.length / 2), b = s.slice(s.length / 2), set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let count = 0
    
    for (let i = 0; i < a.length; i++) {
        if (set.has(a[i])) count++
    }  
    for (let i = 0; i < a.length; i++) {
        if (set.has(b[i])) count--
    }  
    
    return count === 0
};