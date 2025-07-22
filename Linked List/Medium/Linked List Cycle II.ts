/**
 * LeetCode 142: Linked List Cycle II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/linked-list-cycle-ii/
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

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head

    while(fast!==null && fast.next!==null) {
        slow = slow.next
        fast = fast.next.next
        if(slow===fast) {
            fast = head
            while(slow!==fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
};