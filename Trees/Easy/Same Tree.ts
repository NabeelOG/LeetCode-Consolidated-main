/**
 * LeetCode 100: Same Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/same-tree/
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = [[p,q]]

    while(stack.length>0) {
        const [node1,node2] = stack.pop()
        if(!node1 && !node2) continue
        if(!node1 || !node2 || node1.val!==node2.val) {
            return false
        }
        stack.push([node1.left,node2.left])
        stack.push([node1.right,node2.right])
    }
    return true
}