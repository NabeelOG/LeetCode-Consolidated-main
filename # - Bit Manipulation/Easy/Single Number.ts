/**
 * LeetCode 136: Single Number
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/single-number/
 */

function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result = result ^ num;
    }
    return result;
}