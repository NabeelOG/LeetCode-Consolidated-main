/**
 * LeetCode 219: Contains Duplicate II
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/contains-duplicate-ii/
 */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let L = 0
    let window = new Set()
    for(let R = 0;R<nums.length;R++) {
        if(R-L>k) {
            window.delete(nums[L])
            L++
        }
        if(window.has(nums[R])) {
            return true
        }
        window.add(nums[R])
    }
    return false
};