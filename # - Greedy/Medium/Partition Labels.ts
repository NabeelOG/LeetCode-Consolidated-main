/**
 * LeetCode 763: Partition Labels
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/partition-labels/
 */

function partitionLabels(s: string): number[] {
    let lastIndex = {}
    for(let i = 0;i<s.length;i++) {
        lastIndex[s[i]] = i
    }

    let res = []
    let size = 0,end = 0
    for(let i = 0;i<s.length;i++) {
        size++
        end = Math.max(end,lastIndex[s[i]])

        if(i===end) {
            res.push(size)
            size = 0
        }
    }
    return res
};