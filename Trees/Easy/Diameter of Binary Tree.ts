/**
 * LeetCode 543: Diameter of Binary Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/diameter-of-binary-tree/
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = 0

    const dfs = (root) => {
        if(root === null) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        res = Math.max(res,left+right)
        return 1+Math.max(left,right)
    }

    dfs(root)
    return res
};