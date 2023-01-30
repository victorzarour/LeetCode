/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']), temp = new Set()
    let count = 0
    
    for (let i = 0; i < word.length; i++) {
        temp.clear()
        for (let j = i; j < word.length; j++){
            if (!vowels.has(word[j])) break
            temp.add(word[j])
            if (temp.size === vowels.size) count++
        }
    }
    return count
};