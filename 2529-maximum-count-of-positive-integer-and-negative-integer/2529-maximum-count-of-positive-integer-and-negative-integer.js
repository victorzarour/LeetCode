/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    // let countNeg = 0, countPos = 0
    // for (let num of nums) {
    //     if (num > 0) countPos++
    //     else if (num < 0) countNeg++
    // }
    // return Math.max(countNeg, countPos)

    const negative = (nums) => {
        if (nums[0] >= 0 ) return 0;
        let left = 0, right = nums.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] < 0) left = mid + 1
            else right = mid - 1
        }

        return left
    }
    
    const positive = (nums) => {
        if (nums[nums.length - 1] <= 0) return 0
        let left = 0, right = nums.length - 1

        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] > 0) right = mid
            else left = mid + 1
        }

        return nums.length - left
    }
    return Math.max(negative(nums), positive(nums))    
};

