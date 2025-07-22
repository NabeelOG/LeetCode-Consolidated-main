/**
 * LeetCode 206: Reverse Linked List
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/reverse-linked-list/
 */
class ListNode {
    val: number
    next: ListNode | null
    
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev:ListNode | null = null
    let curr:ListNode | null = head

    while(curr) {
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }
    return prev
};

