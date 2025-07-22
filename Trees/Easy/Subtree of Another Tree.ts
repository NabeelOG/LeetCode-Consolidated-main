/**
 * LeetCode 572: Subtree of Another Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/subtree-of-another-tree/
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!subRoot) return true
    if(!root) return false
    if(isSameTree(root,subRoot)) return true
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)


    function isSameTree(root,subRoot) {
        if(!root && !subRoot) return true
        if(root && subRoot && root.val === subRoot.val) {
            return (isSameTree(root.left,subRoot.left) && isSameTree(root.right,subRoot.right))
        }
        return false
    }
};