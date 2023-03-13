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

var isSymmetric = function(root) {
    const isMirror = (left, right) => {
        if (!left && !right) return true
        if (!left && right || left && !right || left.val !== right.val) return false
        return isMirror(left.right, right.left) && isMirror(left.left, right.right)
    }
    return isMirror(root.left, root.right) 
};
    
//         return isMirror(root.left, root.right);
    
//     function isMirror(leftNode, rightNode) {
//         if (!leftNode && !rightNode) return true;
//         if (leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) return false
        
//         return isMirror(leftNode.right, rightNode.left) && isMirror(leftNode.left, rightNode.right);
//     }