/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(items) {
    if (!items.length) return [[]];

    const perms = permute(items.slice(1));
    const fullPermutations = [];

    for (let perm of perms) {
        for (let i = 0; i <= perm.length; i += 1) {
            fullPermutations.push([ ...perm.slice(0, i), items[0], ...perm.slice(i) ]);
        } 
    }
    return fullPermutations;    
};