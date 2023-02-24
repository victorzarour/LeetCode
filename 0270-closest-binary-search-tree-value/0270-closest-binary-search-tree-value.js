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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    const stack = [ root ]
    let closest = root.val
    
    while (stack.length) {
        const current = stack.pop()
        if (Math.abs(current.val - target) < Math.abs(closest - target)) {
            closest = current.val
        }
        
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return closest
};

// var closestValue = function(root, target) {
// 	let closest = root.val

// 	function dfs(node){
// 		if(!node) return 
// 		if(Math.abs(node.val - target) < Math.abs(closest - target)) closest = node.val

// 		if(node.val > target) return dfs(node.left)
// 		if(node.val < target) return dfs(node.right)
// 	}

// 	dfs(root)
// 	return closest
// };