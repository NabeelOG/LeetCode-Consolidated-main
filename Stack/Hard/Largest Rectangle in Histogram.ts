/**
 * LeetCode 84: Largest Rectangle in Histogram
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/largest-rectangle-in-histogram/
 */

function largestRectangleArea(heights: number[]): number {
    const n = heights.length
    let maxArea = 0
    const stack = []

    for(let i = 0;i<=n;i++) {
        while(stack.length && i===n || heights[stack[stack.length-1]]>heights[i]) {
            const height = heights[stack.pop()]
            const width = stack.length===0?i:i-stack[stack.length-1]-1
            maxArea = Math.max(maxArea,height*width)
        }
        stack.push(i)
    }
    return maxArea
};