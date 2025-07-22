/**
 * LeetCode 997: Find the Town Judge
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/find-the-town-judge/
 */

function findJudge(n: number, trust: number[][]): number {
    let incoming = new Array(n+1).fill(0)
    let outgoing = new Array(n+1).fill(0)

    for(let [src,dst] of trust) {
        incoming[dst]++
        outgoing[src]++
    }

    for(let i = 1;i<=n;i++) {
        if(incoming[i]===n-1&&outgoing[i]===0) {
            return i
        }
    }
    return -1
};