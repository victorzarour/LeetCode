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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    const stack = [ [0, root] ]
    let sum = 0
    
    while (stack.length) {
        const [ level, node ] = stack.pop()
        if (level === 1 && !node.right && !node.left) sum += node.val
        
        if (node.right) stack.push([0, node.right])
        if (node.left) stack.push([1, node.left])      
    }
    
    return sum
};

 