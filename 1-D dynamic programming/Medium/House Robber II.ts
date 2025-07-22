/**
 * LeetCode 213: House Robber II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/house-robber-ii/
 */

function rob(nums: number[]): number {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]

    return Math.max(helper(nums.slice(1)),helper(nums.slice(0,-1)))
};

function helper(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]

    const dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])

    for(let i =2;i<nums.length;i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
}