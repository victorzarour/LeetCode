/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    const stack = [ root ], values = []
    
    while (stack.length) {
        const current = stack.pop()
        values.push(current.val)
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    
    let min = Infinity
    
    for (let i = 0; i < values.length; i++) {
        for (let j = 1; j < values.length && j !== i; j++) {
            min = Math.min(min, Math.abs(values[i] - values[j]))
        }   
    }
    return min
};