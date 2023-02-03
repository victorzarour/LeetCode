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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const stack = [ root ], values = []
    
    while (stack.length) {
        const current = stack.pop()
        values.push(current.val)
        
        if (current.right) stack.push(current.right)  
        if (current.left) stack.push(current.left)
    }
    
    for (let i = 0; i < values.length; i++) {
        const difference = k - values[i]
        for (let j = 0; j < values.length; j++) {
            if (values[j] === difference && j !== i) return true
        }
    }
    return false
};