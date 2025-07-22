/**
 * LeetCode 104: Maximum Depth of Binary Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

//recursive
function maxDepth(root: TreeNode | null): number {
    if(root===null) return 0
    return (1+Math.max(maxDepth(root.left),maxDepth(root.right)))
};

//iterative
function maxDepth(root: TreeNode | null): number {
    const stack: [TreeNode | null, number][] = [[root, 1]];
    let res = 0

    while(stack.length>0) {
        let current = stack.pop()!
        let node = current[0]
        let depth = current[1]

        if(node!==null) {
            res = Math.max(res,depth)
            stack.push([node.left,depth+1])
            stack.push([node.right,depth+1])
        }
    }
    return res
};