/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map()
    
    for (let i = 0; i < nums2.length; i++){
        let j = i + 1
        while (nums2[j] <= nums2[i]) j++
        if (j === nums2.length) j = -1
        map.set(nums2[i], nums2[j] || j)
    }
    
    for (let i = 0; i < nums1.length; i++){
        nums1[i] = map.get(nums1[i])
    }
    
    return nums1
};