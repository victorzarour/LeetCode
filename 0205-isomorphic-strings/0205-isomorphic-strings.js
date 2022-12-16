/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = new Map()
    let map2 = new Map()
    
    for (let i = 0; i < s.length; i++) {
        
        if (!map1.get(s[i])) map1.set(s[i], t[i])
        if (!map2.get(t[i])) map2.set(t[i], s[i])
        
        if (map1.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i]) return false
    }
    return true
};

    // for(let i = 0; i < s.length; i++) {
    //     const letter = s[i];
    //     const tLetter = t[i];
    //     if (!obj2[tLetter]) {
    //         obj2[tLetter] = letter;
    //     }
    //     if (!obj1[letter]) {
    //         obj1[letter] = tLetter;
    //     }
    //     if (obj1[letter] !== tLetter || obj2[tLetter] !== letter) {
    //         return false;
    //     }
    // }