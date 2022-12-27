/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
//     const set = new Set(nums)
//     const array = [...Array(nums.length + 1).keys()]

//     for (let num of array){
//         if (!set.has(num)) return num
//     }
    
    nums = nums.sort((a,b) => a-b)
    
            if (nums[nums.length-1] != nums.length) {
            return nums.length;
        }
        // Ensure that 0 is at the first index
        else if (nums[0] != 0) {
            return 0;
        }
    
    for (let i = 1; i < nums.length; i++){
        const num = nums[i - 1] + 1;
        if (nums[i] !== num) return num
    }
};