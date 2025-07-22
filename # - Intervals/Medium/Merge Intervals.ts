/**
 * LeetCode 56: Merge Intervals
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/merge-intervals/
 */

function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b)=>a[0]-b[0])
    let res = []
    res.push(intervals[0])

    for(let interval of intervals) {
        const start = interval[0]
        const end = interval[1]
        const lastend = res[res.length-1][1]

        if(start<=lastend) {
            res[res.length-1][1] = Math.max(lastend,end)
        } else {
            res.push([start,end])
        }
    }
    return res
};