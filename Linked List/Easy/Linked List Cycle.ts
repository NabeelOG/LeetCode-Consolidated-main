/**
 * LeetCode 141: Linked List Cycle
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/linked-list-cycle/
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

function hasCycle(head: ListNode | null): boolean {
    let slow:ListNode | null = head
    let fast:ListNode | null = head

    while(fast!==null && fast.next!==null) {
        slow = slow.next
        fast = fast.next.next
        if(slow===fast) {
            return true
        }
    }
    return false
};