/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
    
    if (!root) return null
    
    const stack = [root]
    const copy = new Map()
    
    while (stack.length > 0){
        const current = stack.pop()
        copy.set(current, new NodeCopy(current.val))
        
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    
    stack.push(root)
    
    while (stack.length > 0){
        const current = stack.pop()
        
        if (current.left){
            copy.get(current).left = copy.get(current.left)
            stack.push(current.left)
        }
        if (current.right){
            copy.get(current).right = copy.get(current.right)
            stack.push(current.right)
        }
        if (current.random) copy.get(current).random = copy.get(current.random)
    }
    
    return copy.get(root)
};