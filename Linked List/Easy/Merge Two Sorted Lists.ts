/**
 * LeetCode 21: Merge Two Sorted Lists
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/merge-two-sorted-lists/
 */


// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1===null) return list2
    if(list2===null) return list1

    let merged = new ListNode()
    let pointer = merged
    while(list1!==null && list2!==null) {
        if(list1.val>list2.val) {
            pointer.next = list2
            list2 = list2.next
        } else {
            pointer.next = list1
            list1 = list1.next
        }
        pointer = pointer.next
    }
    pointer.next = list1!==null?list1:list2
    return merged.next
};