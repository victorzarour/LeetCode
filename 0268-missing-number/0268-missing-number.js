/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set(nums)
    const array = [...Array(nums.length + 1).keys()]

    for (let num of array){
        if (!set.has(num)) return num
    }
};