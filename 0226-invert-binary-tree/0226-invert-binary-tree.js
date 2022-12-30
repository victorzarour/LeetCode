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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null
    const queue = [ root ]
    
    while (queue.length){
        const current = queue.shift()
        
        if (current.left && current.right){
            const right = current.right
            current.right = current.left
            current.left = right
            queue.push(current.right)
            queue.push(current.left)
        }
        else if (current.left) {
            current.right = current.left
            current.left = null
            queue.push(current.right)
        }
        else if (current.right) {
            current.left = current.right
            current.right = null
            queue.push(current.left)
        }
    }
    return root
};