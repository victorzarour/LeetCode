/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let obj = {}, max = 0, result = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) obj[nums[i]] = [i];
        else obj[nums[i]].push(i);
    }
    
    for (let [key, value] of Object.entries(obj)) {

        if (value.length === max) {
            result = Math.min(result, value[value.length - 1] - value[0] + 1);
        }
        if (value.length > max) {
            result = value[value.length - 1] - value[0] + 1;
            max = value.length;
        }
    }
    
    return result;
};