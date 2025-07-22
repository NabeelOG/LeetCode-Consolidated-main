/**
 * LeetCode 2807: Insert Greatest Common Divisors in Linked List
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
 */

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let currentNode = head;

    while (currentNode !== null && currentNode.next !== null) {
        const gcdVal = gcd(currentNode.val, currentNode.next.val);

        const newNode = new ListNode(gcdVal);
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        currentNode = newNode.next;
    }
    return head;
}
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}
