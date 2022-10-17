/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
//     for (let i = 0; i < n; i++){
//         nums1[m + i] = nums2[i]
//     }
    
//     nums1.sort(function(a, b){return a-b})
    
    let p1 = m - 1
    let p2 = n - 1
    
    for (let i = m + n - 1; i >= 0; i--){
        if (p1 >= 0 && p2 >= 0) nums1[i] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--]
        else if (p1 >= 0){
            nums1[i] = nums1[p1]
            p1--
        } 
        else{
            nums1[i] = nums2[p2]            
            p2--
        } 
    }    
          
    return;
};