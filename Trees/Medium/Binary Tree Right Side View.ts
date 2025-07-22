/**
 * LeetCode 199: Binary Tree Right Side View
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/binary-tree-right-side-view/
 */

//dfs method
function rightSideView(root: TreeNode | null): number[] {
    let res = [];
    function dfs(node, depth) {
        if (!node) return;
        if (res.length === depth) {
            res.push(node.val);
        }
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }

    dfs(root, 0);
    return res;
}

//iteration method
function rightSideView(root: TreeNode | null): number[] {
    let res = [];
    if (!root) return res;
    let q: TreeNode[] = [root];

    while (q.length > 0) {
        const qLen = q.length;
        let rightSide = null;

        for (let i = 0; i < qLen; i++) {
            const node = q.shift()!;
            rightSide = node;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(rightSide.val);
    }
    return res;
}
