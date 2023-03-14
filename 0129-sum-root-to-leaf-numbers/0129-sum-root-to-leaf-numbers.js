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
var sumNumbers = function(root) {
    let sum = 0;
    const dfs = (node, string) => {
        if (!node) return "";
        if (!node.left && !node.right){
            string += node.val;
            sum += Number(string);
            return;
        }
        dfs(node.left, string + node.val);
        dfs(node.right, string + node.val);
    }
    dfs(root, '')
    return sum;
};

