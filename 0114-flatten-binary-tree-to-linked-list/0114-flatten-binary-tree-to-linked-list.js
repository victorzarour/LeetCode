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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return root
    let traversalNode = new TreeNode();
    let stack = [root];
    while(stack.length>0){
        let curr = stack.pop();
        traversalNode.right = curr;
        if(curr.right){
            stack.push(curr.right);
        }
        if(curr.left){
            stack.push(curr.left);
        }
        curr.left = null;
        curr.right = traversalNode;
        traversalNode = curr;
    }
    traversalNode.right = null;
};