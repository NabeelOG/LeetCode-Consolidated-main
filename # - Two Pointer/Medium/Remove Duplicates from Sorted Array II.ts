/**
 * LeetCode 80: Remove Duplicates from Sorted Array II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

function removeDuplicates(nums: number[]): number {
    let l = 0, r = 0

    while (r < nums.length) {
        let count = 1
        while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
            r++
            count++
        }
        for (let i = 0; i < Math.min(count, 2); i++) {
            nums[l] = nums[r]
            l++
        }
        r++
    }
    return l
};