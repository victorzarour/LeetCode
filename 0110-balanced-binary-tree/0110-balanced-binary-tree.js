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
var isBalanced = function(root) {
    
    if (!root) return true
    
    return Math.abs(maxDepth(root.right) - maxDepth(root.left)) < 2 && isBalanced(root.left) && isBalanced(root.right)
    
};

var maxDepth = function(root) {
    if (!root) return -1
    
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
};