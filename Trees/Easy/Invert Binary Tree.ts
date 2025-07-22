/**
 * LeetCode 226: Invert Binary Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/invert-binary-tree/
 */

//recursive
function invertTree(root: TreeNode | null): TreeNode | null {
    if(root===null) return null
    const node = new TreeNode(root.val)
    node.right = invertTree(root.left)
    node.left = invertTree(root.right)
    return node
};

//iterative dfs
function invertTree(root: TreeNode | null): TreeNode | null {
    if(root===null) return null
    const q = [root]
    while(q.length>0) {
        const node = q.shift()
        if(node) {
            [node.left,node.right] = [node.right,node.left]
            if(node.left!==null) q.push(node.left)
            if(node.right!==null) q.push(node.right)
        }
    }
    return root
};