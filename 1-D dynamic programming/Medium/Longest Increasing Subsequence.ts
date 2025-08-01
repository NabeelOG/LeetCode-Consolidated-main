/**
 * LeetCode 300: Longest Increasing Subsequence
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-increasing-subsequence/
 */

function lengthOfLIS(nums: number[]): number {
    const list = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                list[i] = Math.max(list[i], 1 + list[j]);
            }
        }
    }
    return Math.max(...list);
}
