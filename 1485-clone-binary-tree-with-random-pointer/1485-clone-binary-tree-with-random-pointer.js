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
    
    const cloneRoot = new NodeCopy()
    const map = new Map()
    const stack = [ root ]
    
    while (stack.length > 0){
        const current = stack.pop()
        map.set(current, new NodeCopy(current.val))
        
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    
    stack.push(root)
    
    while (stack.length > 0){
        const current = stack.pop()
        
        if (current.left){
            map.get(current).left = map.get(current.left)
            stack.push(current.left)
        } 
        if (current.right){
            map.get(current).right = map.get(current.right)
            stack.push(current.right)
        } 
        if (current.random){
            map.get(current).random = map.get(current.random)
        } 
    }
    
    return map.get(root)
    
};