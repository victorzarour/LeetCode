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
var increasingBST = function(root) {
    const stack = [ root ]
    let array = []
    
    while (stack.length) {
        const current = stack.pop()
        array.push(current.val)
        
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    array = array.sort((a, b) => a - b)
    console.log(array)
    
    root = new TreeNode(array[0])
    let current = root
    
    for (let node of array.slice(1)) {
        current.right = new TreeNode(node)
        current = current.right
    }
    
    return root
};