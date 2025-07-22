/**
 * LeetCode 724: Find Pivot Index
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/find-pivot-index/
 */

function pivotIndex(nums: number[]): number {
    const n = nums.length
    const prefixSum = new Array(n+1).fill(0)

    for(let i = 0;i<n;i++) {
        prefixSum[i+1] = prefixSum[i] + nums[i]
    }

    for(let i = 0;i<n;i++) {
        const leftSum = prefixSum[i]
        const rightSum = prefixSum[n] - prefixSum[i+1]
        if(leftSum === rightSum) {
            return i
        }
    }
    return -1
};