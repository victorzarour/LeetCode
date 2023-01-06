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
 * @return {string[]}
 */
// var binaryTreePaths = function(root) {
//     if (!root) return []
//     if (!root.right && !root.left) return [[root.val]]

//     let paths = []

//     const leftPaths = binaryTreePaths(root.left)
//     const rightPaths = binaryTreePaths(root.right)

//     for (subPath of leftPaths) paths.push([root.val, ...subPath])

//     for (subPath of rightPaths) paths.push([root.val, ...subPath])

//     return paths
// };

var binaryTreePaths = function(root) {
    let result = [];
    traverse(root, "");
    
    function traverse(node, path) {
        if (!node) 
            return;
 
        if (!node.left  && !node.right) {
            result.push(path + node.val);
            return;
        }
        traverse(node.left, path + node.val + "->");
        traverse(node.right, path + node.val + "->");
    }
    return result;
};