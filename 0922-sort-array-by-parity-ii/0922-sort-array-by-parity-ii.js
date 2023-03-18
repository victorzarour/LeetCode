/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0 && nums[i] % 2 === 0) continue
        else if (i % 2 === 0) {
            let x = i
            while (nums[x] % 2 !== 0) {
                x++
            }
            [nums[i], nums[x]] = [nums[x], nums[i]]
        }
        else if (i % 2 === 1) {
            let x = i
            while (nums[x] % 2 !== 1) {
                x++
            }
            [nums[i], nums[x]] = [nums[x], nums[i]]
        }
    }
    return nums
};