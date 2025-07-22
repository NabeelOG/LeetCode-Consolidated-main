/**
 * LeetCode 110: Balanced Binary Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/balanced-binary-tree/
 */

function isBalanced(root: TreeNode | null): boolean {
    
    return dfs(root)[0]===1

    function dfs(root) {
        if(!root) return [1,0]
        const left = dfs(root.left)
        const right = dfs(root.right)

        const balanced = left[0]===1&&right[0]===1&&Math.abs(left[1]-right[1])<=1
        const height = 1+Math.max(left[1],right[1])
        return [balanced?1:0,height]
    }
};