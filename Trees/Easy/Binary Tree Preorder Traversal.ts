/**
 * LeetCode 424: Longest Repeating Character Replacement
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-repeating-character-replacement/
 */

//recursive
function preorderTraversal(root: TreeNode | null): number[] {
    const res = []
    
    const preorder = (node) => {
        if(!node) return 0
        res.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }
    preorder(root)
    return res
};

//iterative
function preorderTraversal(root: TreeNode | null): number[] {
    let res = []
    let stack = []
    let curr = root


    while(curr || stack.length>0) {
        if(curr) {
            res.push(curr.val)
            stack.push(curr.right)
            curr = curr.left
        } else {
            curr = stack.pop()
        }
    }
    return res
};