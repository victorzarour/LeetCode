/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const array = [];

    for (let i = 0, left = nums[0]; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
          array.push(left === nums[i] ? `${nums[i]}` : `${left}->${nums[i]}`);
          left = nums[i + 1];
        }
    }
    return array;
};