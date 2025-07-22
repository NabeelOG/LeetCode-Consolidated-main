/**
 * LeetCode 235: Lowest Common Ancestor of a Binary Search Tree
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root || !p || !q) return null
    if(Math.max(p.val,q.val)<root.val) {
        return lowestCommonAncestor(root.left,p,q)
    } else if(Math.min(p.val,q.val)>root.val) {
        return lowestCommonAncestor(root.right,p,q)
    } else {
        return root
    }
};