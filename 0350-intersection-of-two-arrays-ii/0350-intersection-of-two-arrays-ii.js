/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = new Map()
    const map2 = new Map()
    const array = []
    
    for (let num of nums1) {
        map1.set(num, map1.get(num) + 1 || 1)
    }
    for (let num of nums2) {
        map2.set(num, map2.get(num) + 1 || 1)
    }
    for (let key of map1.keys()) {
        if (map2.get(key)) {
            for (let i = 0; i < Math.min(map1.get(key), map2.get(key)); i++) {
                array.push(key)
            }
        }
    }
    return array
};