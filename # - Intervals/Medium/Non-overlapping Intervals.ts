/**
 * LeetCode 435: Non-overlapping Intervals
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/non-overlapping-intervals/
 */

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b)=>a[0]-b[0])
    let res = 0
    let prevEnd = intervals[0][1]

    for(let i = 1;i<intervals.length;i++) {
        const start = intervals[i][0]
        const end = intervals[i][1]

        if(start>=prevEnd) {
            prevEnd = end
        } else {
            res++
            prevEnd = Math.min(end,prevEnd)
        }
    }
    return res
};