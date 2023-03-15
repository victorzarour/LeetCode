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
var isUnivalTree = function(root) {
    const stack = [root], unival = root.val
    while (stack.length) {
        const current = stack.pop()
        if (current.val !== unival) return false
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    return true
};