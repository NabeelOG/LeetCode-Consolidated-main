/**
 * LeetCode 42. Trapping Rain Water
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/trapping-rain-water/
 */

function trap(height: number[]): number {
    if(!height || height.length===0) {
        return 0
    }
    let l = 0,r = height.length-1
    let leftMax = height[l],rightMax = height[r]
    let res = 0
    while(l<r) {
        if(leftMax<rightMax) {
            l++
            leftMax = Math.max(leftMax,height[l])
            res += leftMax - height[l]
        } else {
            r--
            rightMax = Math.max(rightMax,height[r])
            res += rightMax - height[r]
        }
    }
    return res
};