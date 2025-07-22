/**
 * LeetCode 701: Insert into a Binary Search Tree
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/insert-into-a-binary-search-tree/
 */

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val);
    let cur = root;

    while (true) {
        if (val > cur.val) {
            if (!cur.right) {
                cur.right = new TreeNode(val);
                return root;
            }
            cur = cur.right;
        } else {
            if (!cur.left) {
                cur.left = new TreeNode(val);
                return root;
            }
            cur = cur.left;
        }
    }
}
