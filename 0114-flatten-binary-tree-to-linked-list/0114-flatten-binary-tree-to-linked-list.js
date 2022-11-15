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
    if (!root) return root
    
    let traversalNode = new TreeNode()
    let stack = [root]
    
    while (stack.length > 0){
        let current = stack.pop()
    
        traversalNode.right = current
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
        
        current.left = null
        current.right = traversalNode
        
        traversalNode = current
    }
    
    traversalNode.right = null
};