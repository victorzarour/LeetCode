/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
  // if (list1 === null & list2 === null) return null
  // if (list1 === null) return list2
  // if (list2 === null) return list1
  // if (list1.val < list2.val){
  //   const next1 = list1.next
  //   list1.next = mergeTwoLists(next1, list2)
  //   return list1
  // } else {
  //   const next2 = list2.next
  //   list2.next = mergeTwoLists(list1, next2)
  //   return list2
  // }
    
    let tail
    let current1
    let current2
    
    if (list1 === null && list2 === null) return null
    if (list1 === null) return list2
    if (list2 === null) return list1
    
    if (list1.val < list2.val){
        tail = list1
        current1 = list1.next
        current2 = list2
    } else {
        tail = list2
        current2 = list2.next
        current1 = list1
    }
    
    
    while (current1 !== null && current2 !== null){
        if (current1.val < current2.val){
            tail.next = current1
            current1 = current1.next
        } else {
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next
    }
    
    if (current1 !== null) tail.next = current1
    if (current2 !== null) tail.next = current2
    
    return list1.val < list2.val ? list1 : list2
    
};