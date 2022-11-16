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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return
        
    const stack = [ root ]
    let traversalNode = new TreeNode()
    
    while (stack.length){
        const current = stack.pop()
        
        traversalNode.right = current
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
        
        current.left = null
        
        traversalNode = current
    }
};