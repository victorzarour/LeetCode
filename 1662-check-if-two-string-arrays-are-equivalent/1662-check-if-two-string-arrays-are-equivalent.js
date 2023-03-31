/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // return word1.join("") === word2.join("") 
    let string1 = "", string2 = ""
    for (let letter of word1) {
        string1 += letter
    }
    for (let letter of word2) {
        string2 += letter
    }
    return string1 === string2
};