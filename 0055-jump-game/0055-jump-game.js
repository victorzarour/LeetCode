/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = (nums, i = 0, memo = {}) => {
  if (i >= nums.length - 1) return true
  if (i in memo) return memo[i]
  
  for (let j = 1; j <= nums[i]; j++){
    if (canJump(nums, i + j, memo)) return true
  }
  return memo[i] = false
};

// var canJump = function(nums) {
    // let last = nums.length - 1;
    // for (let i = last - 1; i >= 0; i--) {
    //     if (i + nums[i] >= last) {
    //         last = i;
    //     };
    // };
    // return last === 0;
// };