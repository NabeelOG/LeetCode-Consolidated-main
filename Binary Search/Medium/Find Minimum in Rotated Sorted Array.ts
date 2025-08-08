/**
 * LeetCode 153: Find Minimum in Rotated Sorted Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

function findMin(nums: number[]): number {
    let l = 0,
        r = nums.length - 1;
    let res = nums[0];

    while (l <= r) {
        if (nums[l] <= nums[r]) {
            res = Math.min(res, nums[l]);
            break;
        }
        let m = Math.floor((l + r) / 2);
        res = Math.min(res, nums[l]);

        if (nums[l] <= nums[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return res;
}
