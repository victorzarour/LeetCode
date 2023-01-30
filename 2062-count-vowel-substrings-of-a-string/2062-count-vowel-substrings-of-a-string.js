/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let count = 0
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let set = new Set()
    
    for (let i = 0; i < word.length; i++) {
        set.clear()
        for (let j = 0; j < word.length; j++) {
            if (!vowels.has(word[i + j])) break
            set.add(word[i + j])
            if (set.size === vowels.size) count++
        }
    }
    
    return count
};