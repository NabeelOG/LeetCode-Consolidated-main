/**
 * LeetCode 11: Container With Most Water
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/container-with-most-water/
 */

function maxArea(height: number[]): number {
    let l = 0
    let r = height.length-1
    let res = 0

    while(l<r) {
        const area = Math.min(height[l],height[r])*(r-l)
        res = Math.max(res,area)
        if(height[l]<height[r]) {
            l++
        } else {
            r--
        }
    }
    return res
};