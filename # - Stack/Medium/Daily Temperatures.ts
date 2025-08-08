/**
 * LeetCode 739: Daily Temperatures
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/daily-temperatures/
 */

function dailyTemperatures(temperatures: number[]): number[] {
    let res = new Array(temperatures.length).fill(0)
    let stack = []

    for(let i = 0;i<temperatures.length;i++) {
        const t = temperatures[i]
        while(stack.length>0 && t>stack[stack.length-1][0]) {
            const [stackT,stackIDX] = stack.pop()
            res[stackIDX] = i - stackIDX
        }
        stack.push([t,i])
    }
    return res
};