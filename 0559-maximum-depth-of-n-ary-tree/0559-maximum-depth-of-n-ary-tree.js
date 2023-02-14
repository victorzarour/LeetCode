/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;
    
    const traverseAndUpdateMaxDepth = (node, depth) => {
        if (node === null) return depth;
        depth += 1;
        
        if (depth > maxDepth) maxDepth = depth
        
        node.children.forEach(child => traverseAndUpdateMaxDepth(child, depth))   
    }
    
    traverseAndUpdateMaxDepth(root, 0);
    
    return maxDepth;
};