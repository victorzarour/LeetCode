/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
//     let ans = [...nums, ...nums]
    
//     return ans
    
    let ans = []
    let count = 2
    
    while (count){
        for (let num of nums){
            ans.push(num)   
        }
        count--
    }
    
    return ans
};