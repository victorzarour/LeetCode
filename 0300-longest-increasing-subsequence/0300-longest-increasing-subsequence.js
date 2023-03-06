/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums, i = 0, previous = -Infinity, memo = {}) {
    const table = Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                table[j] = Math.max(table[j], 1 + table[i])
            }
        }
    }
    
    let max = 0
    for (let num of table) {
        max = Math.max(max, num)
    }
    return max
};