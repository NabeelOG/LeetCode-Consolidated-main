/**
 * LeetCode 35: Search Insert Position
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/search-insert-position/
 */

function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
