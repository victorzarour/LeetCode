/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    const map = new Map()
    
    for (let i = 0; i < wordsDict.length; i++) {
        if (map.has(wordsDict[i])) map.get(wordsDict[i]).push(i)
        else map.set(wordsDict[i], [i])
    }
    
    const one = map.get(word1), two = map.get(word2)
    let min = Infinity
    
    for (let num of one) {
        for (let num2 of two) {
            min = Math.min(min, Math.abs(num - num2))
        }
    }
    return min    
};