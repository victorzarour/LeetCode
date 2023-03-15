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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const queue = [ root ]
    let found = false
    
    while (queue.length) {
        const current = queue.shift()
        
        if (!current) found = true
        else {
            if (found) return false
            queue.push(current.left)
            queue.push(current.right)
        }
    }
    return true
};