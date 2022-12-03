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
// var reverseList = function(head) {
//     let previous = null
//     let current = head
    
//     while (current){
//         const next = current.next
//         current.next = previous
//         previous = current
//         current = next
//     }
    
//     return previous
// };

const reverseList = (head, previous = null) => {
  if (!head) return previous
  let next = head.next
  head.next = previous  
  return reverseList(next, head)
}