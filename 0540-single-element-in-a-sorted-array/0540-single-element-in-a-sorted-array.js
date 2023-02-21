/**
 * @param {number[]} nums
 * @return {number}
 */

// var singleNonDuplicate = function(nums) {
//     let low = 0, high = nums.length - 1
    
//     while (low < high) {
//         let mid = low + (high - low) / 2
//         if (mid % 2 === 1) mid--
//         if (nums[mid] === nums[mid + 1]) low = mid + 2
//         else high = mid
//     }
//     return nums[low]
// }

var singleNonDuplicate = function(nums) {
    if (nums.length < 1) {
        return nums;
    }
    
    let low = 0;
    let high = nums.length;
    let mid;
    
    while (low <= high) {
        mid = low + (Math.floor((high - low) / 2));

        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
            return nums[mid];
        } else {
            if( (mid % 2 === 0 && nums[mid] === nums[mid+1]) || 
                (mid % 2 !== 0 && nums[mid] !== nums[mid + 1])
              ) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
};