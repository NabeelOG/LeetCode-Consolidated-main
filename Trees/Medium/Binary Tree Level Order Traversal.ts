/**
 * LeetCode 102: Binary Tree Level Order Traversal
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

function levelOrder(root: TreeNode | null): number[][] {
    let res = [];

    function dfs(node, depth) {
        if (!node) return;
        if (res.length === depth) {
            res.push([]);
        }
        res[depth].push(node.val);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return res;
}
