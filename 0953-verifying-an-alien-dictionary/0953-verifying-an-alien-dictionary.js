/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < words[i - 1].length; j++){
            if (order.indexOf(words[i][j]) < order.indexOf(words[i - 1][j])) return false
            else if (order.indexOf(words[i][j]) > order.indexOf(words[i - 1][j])) break   
        }
    }
    return true
};