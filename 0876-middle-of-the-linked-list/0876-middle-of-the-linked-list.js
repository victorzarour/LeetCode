/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function(head) {
//     const array = []
//     let current = head
    
//     while (current){
//         array.push(current)
//         current = current.next
//     }
    
//     return array[Math.floor(array.length / 2)]
// };

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}