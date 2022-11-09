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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const queue = [ root ]
    
    while (queue.length){
        let qLength = queue.length;
        let findX = false
        let findY = false
        
        for (let i = 0; i < qLength; i++){
            const current = queue.shift()
            
            if (current.right && current.left){
                if ((current.right.val === x && current.left.val === y) 
                                        || 
                    (current.right.val === y && current.left.val === x)) 
                return false
            }
            
            if (current.val === x) findX = true
            if (current.val === y) findY = true
            
            if (current.right) queue.push(current.right)
            if (current.left) queue.push(current.left)            
        }
        
        if (findX && findY) return true
    }
    return false
};