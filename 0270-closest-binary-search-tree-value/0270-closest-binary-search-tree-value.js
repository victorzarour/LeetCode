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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    const stack = [ root ]
    let closest, diff = Infinity
    
    while (stack.length) {
        const current = stack.pop()
        let currentDiff = Math.abs(current.val - target)
        if (currentDiff < diff) {
            diff = currentDiff
            closest = current.val
        }
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return closest
};