/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let counter1 = l1;
    let counter2 = l2;
    
    let dummyHead = new ListNode(null)
    let tail = dummyHead
    
    let carry = 0
    
    while (counter1 !== null || counter2 !== null || carry !== 0){
        
        const val1 = counter1 === null ? 0 : counter1.val
        const val2 = counter2 === null ? 0 : counter2.val
        
        const sum = val1 + val2 + carry
        const digit = sum % 10
        carry = sum > 9 ? 1 : 0
        
        tail.next = new ListNode(digit)
        tail = tail.next
        
        counter1 = counter1 === null ? null : counter1.next
        counter2 = counter2 === null ? null : counter2.next
    }
    
    return dummyHead.next
};
