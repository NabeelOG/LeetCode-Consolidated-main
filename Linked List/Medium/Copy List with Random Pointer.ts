/**
 * LeetCode 138: Copy List with Random Pointer
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/copy-list-with-random-pointer/
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    const oldCopy = new Map()
    oldCopy.set(null,null)

    let cur = head
    while(cur) {
        let copy = new _Node(cur.val)
        oldCopy.set(cur,copy)
        cur = cur.next
    }
    cur = head
    while(cur) {
        const copy = oldCopy.get(cur)
        copy.next = oldCopy.get(cur.next)
        copy.random = oldCopy.get(cur.random)
        cur = cur.next
    }
    return oldCopy.get(head)
};