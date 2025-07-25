/**
 * LeetCode 209: Minimum Size Subarray Sum
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/minimum-size-subarray-sum/
 */

function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0,total = 0,res = Infinity

    for(let r = 0;r<nums.length;r++) {
        total = total + nums[r]
        while(total>=target) {
            res = Math.min(r-l+1,res)
            total = total - nums[l]
            l++
        }
    }
    return res===Infinity?0:res;
};