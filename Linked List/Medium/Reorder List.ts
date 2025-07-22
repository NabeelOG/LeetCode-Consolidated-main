/**
 * LeetCode 143: Reorder List
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/reorder-list/
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let slow = head
    let fast = head

    while(fast!==null && fast.next!==null) {
        slow = slow.next
        fast = fast.next.next
    }
    let second = slow.next
    slow.next = null

    let prev:ListNode | null = null

    while(second) {
        let nextNode = second.next
        second.next = prev
        prev = second
        second = nextNode
    }
    let reversed = prev

    let first = head
    while(reversed) {
        let tmp1 = first.next
        let tmp2 = reversed.next

        first.next = reversed
        reversed.next = tmp1

        first = tmp1
        reversed = tmp2
    }
};