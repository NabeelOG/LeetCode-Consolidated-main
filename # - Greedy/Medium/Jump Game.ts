/**
 * LeetCode 55: Jump Game
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/jump-game/
 */

//greedy
function canJump(nums: number[]): boolean {
    let goal = nums.length-1

    for(let i = nums.length-2;i>=0;i--) {
        if(i+nums[i]>=goal) {
            goal=i
        }
    }
    return goal===0
};

//dynamic programming.

function canJump_2(nums: number[]): boolean {
    const n = nums.length
    const dp =  new Array(n+1).fill(false)
    // console.log(dp)
    dp[n-1] = true
    // console.log(dp)
    for(let i = n-2;i>=0;i--) {
        const end = Math.min(nums.length,i+nums[i])
        for(let j = i+1;j<=end;j++) {
            if(dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[0]
};