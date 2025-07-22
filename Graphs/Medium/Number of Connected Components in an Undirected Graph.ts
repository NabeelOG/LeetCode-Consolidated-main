/**
 * LeetCode Number of Connected Components in an Undirected Graph
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        //first we need an adjacency list
        const adj = Array.from({length:n},()=>[])
        const visit = Array(n).fill(false)

        for(const [u,v] of edges) {
            adj[u].push(v)
            adj[v].push(u)
        }

        const dfs = (node) => {
            for(const nei of adj[node]) {
                if(!visit[nei]) {
                    visit[nei] = true
                    dfs(nei)
                }
            }
        }

        let res = 0
        for(let node = 0;node<n;node++) {
            if(!visit[node]) {
                visit[node] = true
                dfs(node)
                res++
            }
        }
        return res
    }
}
