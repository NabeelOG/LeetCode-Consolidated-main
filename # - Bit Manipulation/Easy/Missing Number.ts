/**
 * LeetCode 268: Missing Number
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/missing-number/
 */

function missingNumber(nums: number[]): number {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let actualsum = nums.reduce((a, b) => a + b, 0);
    return sum - actualsum;
}
