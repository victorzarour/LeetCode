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
// var preorder = function(root) {
//     const stack = [ root ], values = []
    
//     while (stack.length) {
//         const current = stack.pop()
//         values.push(current.val)   
        
//         for (let child of current.children) {
//             stack.push(child)
//         }
//     }
//     return values
// };

var preorder = function(root) {
    if (!root){
        return [];
    }
    
    let order = [];
    let stack = [];
    stack.push(root);
    
    while(stack.length > 0) {
        let node = stack.pop();
        order.push(node.val);
        let children = node.children;
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);    
        }
        
    }
    
    return order;
};