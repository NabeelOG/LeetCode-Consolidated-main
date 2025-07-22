/**
 * LeetCode 92: Reverse Linked List II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/reverse-linked-list-ii/
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy = new ListNode(0,head)
    let leftPrev = dummy
    let curr = head
    for(let i = 1;i<left;i++) {
        leftPrev = curr
        curr = curr.next
    }
    
    let prev = null
    for(let i = 0;i<right-left+1;i++) {
        const tmpNode = curr.next
        curr.next = prev
        prev = curr
        curr = tmpNode
    }
    leftPrev.next.next = curr
    leftPrev.next = prev

    return dummy.next
};