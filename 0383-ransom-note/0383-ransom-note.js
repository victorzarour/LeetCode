/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    
    for (let letter of magazine){
        map.set(letter, map.get(letter) + 1 || 1)
    }
    
    for (let letter of ransomNote){
        if (!map.get(letter)) return false
        map.set(letter, map.get(letter) - 1)
    }
    
    return true
};