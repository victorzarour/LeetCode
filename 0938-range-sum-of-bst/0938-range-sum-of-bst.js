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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const stack = [ root ]
    let sum = 0
    
    while (stack.length){
        const current = stack.pop()
        if (current.val >= low && current.val <= high) sum += current.val
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return sum
};