/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummyHead = new ListNode(null)
    dummyHead.next = head
    
    let tail = dummyHead
    let current = head
    
    while (current){
        if (current.val === val) tail.next = current.next
        else tail = current
        current = current.next
    }
    
    return dummyHead.next
};