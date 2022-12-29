/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const map1 = new Map()
    const map2 = new Map()
    
    for (let letter of word1){
        map1.set(letter, map1.get(letter) + 1 || 1)
    }
    
    for (let letter of word2){
        map2.set(letter, map2.get(letter) + 1 || 1)
    }
    
    console.log(map1, map2)
    
    for (let [key, value] of map1){
        if ((!map2.get(key) && value > 3) || Math.abs(map2.get(key) - value) > 3) return false
    }
    
    for (let [key, value] of map2){
        if ((!map1.get(key) && value > 3) || Math.abs(map1.get(key) - value) > 3) return false
    }
    
    return true
    
};