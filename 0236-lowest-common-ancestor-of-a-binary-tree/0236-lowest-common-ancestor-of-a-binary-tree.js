/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const path1 = findPath(root, p)
    const path2 = findPath(root, q)
    const set = new Set(path2)
    
    for (let val of path1){
        if (set.has(val)) return val
    }    
};

const findPath = (root, target) => {
    if (!root) return null
    if (root === target) return [ root ]
    
    const leftPath = findPath(root.left, target)
    if (leftPath){
        leftPath.push(root)
        return leftPath
    }
    
    const rightPath = findPath(root.right, target)
    if (rightPath){
        rightPath.push(root)
        return rightPath
    }
}