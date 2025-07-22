/**
 * LeetCode 2130: Maximum Twin Sum of a Linked List
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 */

function pairSum(head: ListNode | null): number {
    let slow = head,fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null,curr = slow
    while(curr) {
        const newNode = curr.next
        curr.next = prev
        prev = curr
        curr = newNode
    }

    let res = 0,first = head,second = prev
    while(second) {
        res = Math.max(res,first.val+second.val)
        first = first.next
        second = second.next
    }
    return res
};