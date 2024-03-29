/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    if (nums.length < 2) return [];
    let result = [], path = [];
    
    const backtrack = (startIndex) => {
        if (path.length >= 2) result.push([...path]);
        const used = new Set();
        for (let i = startIndex; i < nums.length; i++) {
            if (path.length > 0 && nums[i] < path[path.length - 1] || used.has(nums[i])) continue;
            used.add(nums[i]);
            path.push(nums[i]);
            backtrack(i + 1);
            path.pop();
        }
        return;
    }
    backtrack(0);
    return result;
};