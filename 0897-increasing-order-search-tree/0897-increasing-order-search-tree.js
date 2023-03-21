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
    let result = [];
    const traversal = head => {
        if (head === null) return head;
        traversal(head.left);
        result.push(head.val);
        traversal(head.right);
    }
    traversal(root);
    
    let dummyTree = new TreeNode(0);
    let current = dummyTree;
    for (let i = 0; i < result.length; i++) {
        current.right = new TreeNode(result[i]);
        current = current.right;
    }
    return dummyTree.right;
};