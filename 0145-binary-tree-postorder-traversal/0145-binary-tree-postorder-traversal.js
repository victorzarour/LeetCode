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
var postorderTraversal = function(root) {
    if (!root) return []
    const values = []
    const queue = [ root ]
    
    while (queue.length){
        const current = queue.pop()
        values.push(current.val)
        
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return values.reverse()
};