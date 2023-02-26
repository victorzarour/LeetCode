/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const stack = [ root ], values = []
    
    while (stack.length) {
        const current = stack.pop()
        values.push(current.val)   
        
        for (let i = current.children.length - 1; i >= 0; i--) {
            stack.push(current.children[i]);    
        }
    }
    return values
};

