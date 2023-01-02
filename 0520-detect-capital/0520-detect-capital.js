/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length === 1) return true
    
    if (word[0] === word[0].toLowerCase()){
        for (let letter of word) {
            if (letter === letter.toUpperCase()) return false
        }
    } else {
        if (word[1] === word[1].toUpperCase()){
            for (let i = 2; i < word.length; i++) {
                if (word[i] === word[i].toLowerCase()) return false
            }
        } else {
            for (let i = 2; i < word.length; i++) {
                if (word[i] === word[i].toUpperCase()) return false
            }
        }
    }
    return true
};