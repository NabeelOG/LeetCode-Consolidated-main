/**
 * LeetCode 1448: Count Good Nodes in Binary Tree
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 */

function goodNodes(root: TreeNode | null): number {
    function dfs(node, maxVal) {
        if (!node) return 0;
        let res = node.val >= maxVal ? 1 : 0;
        maxVal = Math.max(maxVal, node.val);
        res += dfs(node.left, maxVal);
        res += dfs(node.right, maxVal);
        return res;
    }
    return dfs(root, root.val);
}
