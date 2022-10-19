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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return []
    const values = []
    const stack = []
    let current = root
    
    while (stack.length > 0 || current !== null){
		while(current !== null) {
			stack.push(current);
			current = current.left;
		}
        
		current = stack.pop();
		values.push(current.val)
		current = current.right
    }
    
    return values
};