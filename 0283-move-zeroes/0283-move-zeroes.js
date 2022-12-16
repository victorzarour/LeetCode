/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     for(let i= nums.length-1; i>=0; i--){
//         if(nums[i]===0){
//             nums.push(0) 
//             nums.splice(i,1)
//         }
//     }
//     return nums
// };

var moveZeroes = function(nums) {
    let last = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[last]] = [nums[last], nums[i]];
            last++;
        }
    }
	return nums;
};
