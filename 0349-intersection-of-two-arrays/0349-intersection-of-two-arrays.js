/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set()
    const finalSet = new Set()
    
    for (let num of nums1) {
        set1.add(num)
    }
    
    for (let num of nums2) {
        if (set1.has(num)) finalSet.add(num)
    }
    
    return Array.from(finalSet)
};