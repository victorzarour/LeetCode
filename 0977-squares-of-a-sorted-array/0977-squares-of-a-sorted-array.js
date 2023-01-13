/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     const squares = []
    
//     for (let num of nums) {
//         squares.push(num * num)
//     }
    
//     return squares.sort((a,b) => a-b)
// };

var sortedSquares = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    
    return nums.sort((a,b) => a-b)
};