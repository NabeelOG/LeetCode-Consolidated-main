/**
 * LeetCode 1: Contains Duplicate
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/two-sum/
 */

function twoSum(nums: number[], target: number): number[] {
    let result = new Map()
    for(let i = 0;i<nums.length;i++) {
        let diff = target - nums[i]
        if(result.has(diff)) {
            return [result.get(diff),i]
        }
        result.set(nums[i],i)
    }
    return [0,0]
};