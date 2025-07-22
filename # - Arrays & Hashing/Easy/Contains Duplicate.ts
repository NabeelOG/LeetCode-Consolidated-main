/**
 * LeetCode 217: Contains Duplicate
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/contains-duplicate/
 */

function containsDuplicate(nums: number[]): boolean {
    let result = new Set()
    for(let i = 0;i<nums.length;i++) {
        if(result.has(nums[i])) {
            return true
        }
        result.add(nums[i])
    }
    return false
};