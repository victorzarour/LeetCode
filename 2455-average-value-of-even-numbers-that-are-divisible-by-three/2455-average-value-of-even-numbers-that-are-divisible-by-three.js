/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const array = []
    for (let num of nums) {
        if (num % 2 === 0 && num % 3 === 0) array.push(num)
    }
    
    let sum = 0
    for (let num of array) {
        sum += num
    }
    
    return sum === 0 ? 0 : Math.floor(sum / array.length)
};