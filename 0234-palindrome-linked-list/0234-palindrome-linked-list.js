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
    let current = head
    const array = []

    while (current){
        array.push(current.val)
        current = current.next
    }

    let last = array.length - 1
    for (let i = 0; i < last; i++){
        if (array[i] !== array[last]) return false
        last--
    }
    return true
};