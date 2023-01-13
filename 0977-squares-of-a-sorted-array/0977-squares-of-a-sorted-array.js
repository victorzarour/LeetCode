/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = []
    
    for (let num of nums) {
        squares.push(num * num)
    }
    
    return squares.sort((a,b) => a-b)
};