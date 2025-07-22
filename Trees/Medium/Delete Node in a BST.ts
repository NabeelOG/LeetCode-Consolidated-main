/**
 * LeetCode 450: Delete Node in a BST
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/delete-node-in-a-bst/
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return root;
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        if (!root.right) return root.left;
        if (!root.left) return root.right;

        let cur = root.right;
        while (cur.left) {
            cur = cur.left;
        }
        root.val = cur.val;
        root.right = deleteNode(root.right, cur.val);
    }
    return root;
}
