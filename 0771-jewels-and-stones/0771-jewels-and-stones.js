/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// var numJewelsInStones = function(jewels, stones) {
//     let count = 0
    
//     for (let jewel of jewels) {
//         for (let stone of stones) {
//             if (jewel === stone) count++
//         }
//     }
//     return count
// };

var numJewelsInStones = function(jewels, stones) {
    const set = new Set(jewels)
    let count = 0
    
    for (let stone of stones) {
        if (set.has(stone)) count++
    }
    return count
};