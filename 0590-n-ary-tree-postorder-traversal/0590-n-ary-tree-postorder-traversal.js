/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return []
    const stack = [ root ], values = []
    
    while (stack.length) {
        const current = stack.pop()
        values.unshift(current.val)
        
        for (let child of current.children) {
            stack.push(child)
        }
        
    }
    return values
};