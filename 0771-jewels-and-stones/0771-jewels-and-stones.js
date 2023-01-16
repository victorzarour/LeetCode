/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    
    for (let jewel of jewels) {
        for (let stone of stones) {
            if (jewel === stone) count++
        }
    }
    return count
};