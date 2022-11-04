/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let array = []
    let current = head
    
    while (current){
        array.push(current.val)
        current = current.next
    }
    
    let max = array.length - 1
    
    for (let min = 0; min < max; min++){
        if (array[min] !== array[max]) return false
        max--
    }
    
    return true
    
};