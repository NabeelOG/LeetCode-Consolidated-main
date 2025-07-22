/**
 * LeetCode 2: Add Two Numbers
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0)
    let pointer = dummy
    let carry = 0
    while(l1!==null || l2!==null || carry>0) {
        let sum = carry
        if(l1!==null) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if(l2!==null) {
            sum = sum + l2.val
            l2 = l2.next
        }
        carry = Math.floor(sum/10)

        pointer.next = new ListNode(sum%10)
        pointer = pointer.next
    }
    return dummy.next
};