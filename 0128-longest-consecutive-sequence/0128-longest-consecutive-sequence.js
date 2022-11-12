/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     let count = 0
//     let temp = 0
    
//     let sorted = nums.sort((a,b) => a-b)
    
//     for (let i = 0; i < nums.length; i++) {
//         temp++
//         if (nums[i] + 1 !== nums[i + 1]) temp = 0
//         count = Math.max(count, temp + 1)
//     }
    
//     return count
// };

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    
    for (let num of set) {
        
        if(!set.has(num - 1)) {
            let count = 0;
            
            while (set.has(num++)) {
                count++;
            }
            
            max = Math.max(count, max);
        }
    }
    return max;
};