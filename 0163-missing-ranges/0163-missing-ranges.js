/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    nums = [lower - 1, ...nums, upper + 1];
    
    let result = [];
    
    for (let i = 1; i < nums.length; i++) {
    
        if (nums[i] !== nums[i - 1] && nums[i] - 1 !== nums[i - 1]) {
            
            let num1 = nums[i - 1] + 1
            let num2 = nums[i] - 1;
            
            result.push(num1 + (num1 == num2 ? "" : ("->" + num2)));
        }
    }
    return result;
};