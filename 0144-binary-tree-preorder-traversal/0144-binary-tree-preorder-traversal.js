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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return []
    const queue = [ root ]
    const values = []
    
    while (queue.length){
        const current = queue.pop()
        values.push(current.val)
        
        if (current.right) queue.push(current.right)
        if (current.left) queue.push(current.left)
    }
    
    return values
};