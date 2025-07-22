/**
 * LeetCode 98: Validate Binary Search Tree
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/validate-binary-search-tree/
 */

function isValidBST(root: TreeNode | null): boolean {
    let prev = -Infinity;
    let isValid = true;

    const inorder = (node) => {
        if (!isValid || !node) return;
        inorder(node.left);
        if (prev >= node.val) {
            isValid = false;
            return;
        }
        prev = node.val;
        inorder(node.right);
    };

    inorder(root);
    return isValid;
}
