/**
 * LeetCode 198: House Robber
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/house-robber/
 */

function rob(nums: number[]): number {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[1]

    const dp = new Array(nums.length).fill(0)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])

    for(let i = 2;i<=nums.length;i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};