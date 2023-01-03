/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = []
    const leaves2 = []
    const stack = [ root1 ]
    const stack2 = [ root2 ]
    
    while (stack.length) {
        const current = stack.pop() 
        if (!current.left && !current.right) leaves1.push(current.val)
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
        
    while (stack2.length) {
        const current = stack2.pop() 
        if (!current.left && !current.right) leaves2.push(current.val)
        
        if (current.right) stack2.push(current.right)
        if (current.left) stack2.push(current.left)
    }

    if (leaves1.length !== leaves2.length) return false
    
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false
    }
    return true    
};