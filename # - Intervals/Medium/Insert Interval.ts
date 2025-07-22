/**
 * LeetCode 57: Insert Interval
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/insert-interval/
 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const res = []
    for(let interval of intervals) {
        if(newInterval===null || interval[1]<newInterval[0]) {
            res.push(interval)
        } else if(interval[0]>newInterval[1]) {
            res.push(newInterval)
            res.push(interval)
            newInterval = null
        } else {
            newInterval[0] = Math.min(interval[0],newInterval[0])
            newInterval[1] = Math.max(interval[1],newInterval[1])
        }
    }
    if(newInterval!==null) res.push(newInterval)
    return res
};