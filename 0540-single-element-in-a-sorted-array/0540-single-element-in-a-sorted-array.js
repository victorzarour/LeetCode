/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
//     let map = new Map()
    
//     for (let num of nums) {
//         map.set(num, map.get(num) + 1 || 1)
//     }
    
//     for (let [ key, value ] of map) {
//         if (value !== 2) return key
//     } 
    let low = 0, hi = nums.length - 1
    
    while (low < hi) {
        const mid = low + (hi - low) / 2
    }
};

var singleNonDuplicate = function(nums) {
    if (nums.length < 1) return nums;
    let low = 0, high = nums.length
    
    while (low <= high) {
        const mid = low + (Math.floor((high - low) / 2));

        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) return nums[mid];
        else {
            if( (mid % 2 === 0 && nums[mid] === nums[mid+1]) || 
                (mid % 2 !== 0 && nums[mid] !== nums[mid + 1])
              ) {
                low = mid + 1;
            } else high = mid - 1;
        }
    }
};