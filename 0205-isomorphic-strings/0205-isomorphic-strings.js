/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map()
    let mapT = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if (!mapS.get(s[i])) mapS.set(s[i], t[i])
        if (!mapT.get(t[i])) mapT.set(t[i], s[i])
        
        if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) return false
    }
    return true
};