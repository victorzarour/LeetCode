/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b) => b - a)
        if (stones[0] === stones[1]) stones.splice(0, 2)
        else {
            stones[0] = stones[0] - stones[1] 
            stones.splice(1, 1)
        }
    }
    return stones
};