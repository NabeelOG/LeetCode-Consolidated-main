/**
 * LeetCode 45: Jump Game II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/jump-game-ii/
 */

//dynamic programming
function jump(nums: number[]): number {
    const n = nums.length
    const dp = new Array(n).fill(100000)
    dp[n-1] = 0

    for(let i = n-2;i>=0;i--) {
        const end = Math.min(nums.length,i+nums[i]+1)
        for(let j = i+1;j<end;j++) {
            dp[i] = Math.min(dp[i],1+dp[j])
        }
    }
    return dp[0]
};

//greedy approach
function jump2(nums: number[]): number {
    let res = 0,l = 0, r = 0
    while(r<nums.length - 1) {
        let farthest = 0
        for(let  i = l;i<=r;i++) {
            farthest = Math.max(farthest,i+nums[i])
        }
        l = r+1
        r = farthest
        res++
    }
    return res
};