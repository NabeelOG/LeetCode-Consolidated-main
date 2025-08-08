/**
 * LeetCode 33: Search in Rotated Sorted Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return -1;
}
