/**
 * LeetCode 145: Binary Tree Postorder Traversal
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

//recursive
function postorderTraversal(root: TreeNode | null): number[] {
    const res = []

    const postorder = (node) => {
        if(!node) return
        postorder(node.left)
        postorder(node.right)
        res.push(node.val)
    }

    postorder(root)
    return res
};

//iterative
function postorderTraversal(root: TreeNode | null): number[] {
    const res = []
    let stack = []
    let cur = root

    while(cur || stack.length>0) {
        if(cur) {
            res.push(cur.val)
            stack.push(cur)
            cur = cur.right
        } else {
            cur = stack.pop()
            cur = cur.left
        }
    }
    res.reverse()
    return res
};