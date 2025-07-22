/**
 * LeetCode 88: Merge Sorted Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/merge-sorted-array/
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m-1
    let j = n-1
    let k = m+n-1

    while(i>=0 && j>=0) {
        if(nums1[i]<nums2[j]) {
            nums1[k] = nums2[j]
            k--
            j--
        } else {
            nums1[k] = nums1[i]
            k--
            i--
        }
    }
    while(j>=0) {
        nums1[k] = nums2[j]
        k--
        j--
    }
};