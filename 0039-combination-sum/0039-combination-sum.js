/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []    
    
    const recursive = (target, path, start) => {
        if (target < 0) return 
        if (target === 0){
            result.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            recursive(target - candidates[i], [...path, candidates[i]], i)
        }
    }
    
    recursive(target, [], 0)
    
    return result
};
