/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let k = 1
    
    for (let i = 0; i < nums.length -1; i++){
        if (nums[i] !== nums[i + 1]){
            nums[k] = nums[i + 1]
            k++
        }
    }
    
    return k
};

// [0,1,2,3,4,2,2,3,3,4]
//                    i 
//            k