/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let s = 0, m = Math.floor(nums.length / 2), l = nums.length - 1
    
    while (s <= l) {
        m = Math.floor((s + l) / 2)
        if (nums[m] === target) return m
        else if (nums[m] > target) l = m - 1
        else s = m + 1
    }
    return s
};

// [1, 3, 5, 6]
//        s     
//        m
//           l

  
//     let i = 0;
//     let middle;
//     let j = nums.length
    
//     while (i <= j){
//         middle = Math.floor((i + j) / 2);
        
//         if (nums[middle] === target) {
//             return middle
//         } else if (nums[middle] < target) {
//             i = middle + 1
//         } else {
//             j = middle - 1
//         }
//     }
//     return i