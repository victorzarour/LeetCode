/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    
    for (let l of s){
        if (map.get(l)) map.set(l, map.get(l) + 1)
        else map.set(l, 1)
    }
    
    for (let [key, value] of map) {
        if (value === 1) return s.indexOf(key)
    }
        

    return -1

};