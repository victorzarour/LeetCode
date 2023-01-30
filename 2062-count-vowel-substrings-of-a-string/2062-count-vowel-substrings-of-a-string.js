/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']), temp = new Set()
    let count = 0
    
    for (let i = 0; i < word.length; i++) {
        temp.clear()
        for (let j = 0; j < word.length; j++){
            if (!vowels.has(word[i + j])) break
            temp.add(word[i + j])
            if (temp.size === vowels.size) count++
        }
    }
    return count
};