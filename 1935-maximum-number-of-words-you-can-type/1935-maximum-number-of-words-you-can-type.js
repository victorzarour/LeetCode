/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' '), set = new Set(brokenLetters);
    let count = 0;
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        for (let j = 0; j < word.length; j++){
            if (set.has(word[j])) {
                count++;
                break;
            }
        }
    }
    return words.length - count;
};