/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    // const target = []
    // for (let i = 0; i < nums.length; i++) {
    //     target.splice(index[i], 0, nums[i])
    // }    
    // return target
    
        return index.reduce((result, index, i) => {
        const leftSide = result.slice(0, index);
        const rightSide = result.slice(index);
        return [...leftSide, nums[i], ...rightSide];
    }, []);
};
