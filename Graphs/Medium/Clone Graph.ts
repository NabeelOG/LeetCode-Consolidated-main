/**
 * LeetCode 133. Clone Graph
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/clone-graph/
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */
 
function cloneGraph(node: _Node | null): _Node | null {
    const oldToNew = new Map()
	const dfs = (node) => {
        if(node===null) return null
        if(oldToNew.has(node)) return oldToNew.get(node)

        const copy = new _Node(node.val)
        oldToNew.set(node,copy)
        for(const nei of node.neighbors) {
            copy.neighbors.push(dfs(nei))
        }
        return copy
    }
    return dfs(node)
};