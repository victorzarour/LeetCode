/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const nums = myArr = String(num).split("").map((num)=> Number(num))
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 6) {
            nums[i] = 9
            break
        }
    }
    return Number(nums.join(""))
};