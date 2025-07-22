/**
 * LeetCode 53: Maximum Subarray
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/maximum-subarray/
 */

function maxSubArray(nums: number[]): number {
    let localsum = 0
    let globalsum = -Infinity

    for(let num of nums) {
        localsum = Math.max(num,num+localsum)
        globalsum = Math.max(localsum,globalsum)
    }
    return globalsum
};