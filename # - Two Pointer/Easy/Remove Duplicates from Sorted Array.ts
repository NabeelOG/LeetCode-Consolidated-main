/**
 * LeetCode 26: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */

function removeDuplicates(nums: number[]): number {
    let l = 1
    for(let r = 1;r<nums.length;r++) {
        if(nums[r]!==nums[r-1]) {
            nums[l] = nums[r]
            l++
        }
    }
    return l
};