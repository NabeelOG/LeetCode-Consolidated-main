/**
 * LeetCode 19: Remove Nth Node From End of List
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(0,head)

    let left = dummy
    let right = head
    while(n>0) {
        right = right.next
        n--
    }
    while(right!==null) {
        left = left.next
        right = right.next
    }
    left.next = left.next.next
    return dummy.next
};