/**
 * LeetCode 94: Binary Tree Inorder Traversal
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/binary-tree-inorder-traversal/
 */

//recursive
function inorderTraversal(root: TreeNode | null): number[] {
    const res = []


    const inorder = (node) => {
        if(!node) return
        inorder(node.left)
        res.push(node.val)
        inorder(node.right)
    }


    inorder(root)
    return res
};

//iterative
function inorderTraversal(root: TreeNode | null): number[] {
    let res = []
    let stack = []
    let curr = root

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right
    }
    return res
};