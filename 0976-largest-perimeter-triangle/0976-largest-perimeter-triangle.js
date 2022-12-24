/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sorted = nums.sort((a, b) => a-b)
    let max = 0

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] + sorted[i + 1] > sorted[i + 2]) max = Math.max(max, sorted[i] + sorted[i + 1] + sorted[i + 2])
    }
    return max
};