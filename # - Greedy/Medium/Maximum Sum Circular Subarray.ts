/**
 * LeetCode 918: Maximum Sum Circular Subarray
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/maximum-sum-circular-subarray/
 */

function maxSubarraySumCircular(nums: number[]): number {
    let globalmax = nums[0],globalmin = nums[0]
    let curmax = 0,curmin = 0,total = 0
    for(let num of nums) {
        curmax = Math.max(num,curmax+num)
        curmin = Math.min(num,curmin+num)
        total = total+num
        globalmax = Math.max(globalmax,curmax)
        globalmin = Math.min(globalmin,curmin)
    }
    return globalmax>0?Math.max(total-globalmin,globalmax):globalmax
};