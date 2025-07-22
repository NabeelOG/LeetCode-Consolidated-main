/**
 * LeetCode 912: Sort an Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/sort-an-array/
 */

function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    return merge(sortArray(left), sortArray(right))
};
function merge(left: number[], right: number[]): number[] {
    const sorted: number[] = []
    let i = 0, j = 0, k = 0
    while (i < left.length && j < right.length) {
        if(left[i]<right[j]) {
            sorted[k++] = left[i++]
        } else {
            sorted[k++] = right[j++]
        }
    }
    while(i<left.length) {
        sorted[k++] = left[i++]
    }
    while(j<right.length) {
        sorted[k++] = right[j++]
    }
    return sorted
}