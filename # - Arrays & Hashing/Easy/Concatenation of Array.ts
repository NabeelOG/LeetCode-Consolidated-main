/**
 * LeetCode 1929: Concatenation of Array
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/concatenation-of-array/
 */

function getConcatenation(nums: number[]): number[] {
    let n = nums.length
    let arr = new Array(n*2)
    for(let i = 0;i<n;i++) {
        arr[i] = nums[i]
        arr[i+n] = nums[i]
    }
    return arr
};