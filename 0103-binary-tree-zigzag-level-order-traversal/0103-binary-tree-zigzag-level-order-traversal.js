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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    const stack = [[ root, 0 ]], vals = []
    
    while (stack.length) {
        const [ current, level ] = stack.shift()
        if (!vals[level]) { 
            vals.push([current.val])
        }
        else {
            level % 2 === 0 ? vals[level].unshift(current.val) : vals[level].push(current.val)  
        } 
        
        
        if (current.right) stack.push([ current.right, level + 1 ])
        if (current.left) stack.push([ current.left, level + 1 ])

    }
    return vals
};

// const zigzagLevelOrder = (root) => {
//     let level = 1;
//     const out = [];
//     const queue = [root];

//     while(queue.length) {
//         const qLen = queue.length;
//         const innerArr = [];
//         for(let i = 0; i < qLen; i++) {
            
//             const currNode = queue.shift();
            
//             if(level % 2 === 0) innerArr.unshift(currNode.val);
//             else innerArr.push(currNode.val);
            
//             if(currNode.left) queue.push(currNode.left);
//             if(currNode.right) queue.push(currNode.right);
            
//         }
//         level++;
//         out.push(innerArr);
//     }
//     return out;
// };