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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const queue = [[ root, 0 ]], vals = []
    
    while (queue.length) {
        const [ current, level ] = queue.shift()
        if (!vals[level]) { 
            vals.push([current.val])
        }
        else {
            level % 2 === 0 ? vals[level].unshift(current.val) : vals[level].push(current.val)  
        } 
        
        
        if (current.right) queue.push([ current.right, level + 1 ])
        if (current.left) queue.push([ current.left, level + 1 ])

    }
    return vals
};