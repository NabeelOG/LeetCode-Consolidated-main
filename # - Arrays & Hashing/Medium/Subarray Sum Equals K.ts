/**
 * LeetCode 560: Subarray Sum Equals K
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/subarray-sum-equals-k/
 */

function subarraySum(nums: number[], k: number): number {
    let res = 0,curSum = 0
    let prefixSum = new Map()
    prefixSum.set(0,1)
    for(let num of nums) {
        curSum = curSum + num
        let diff = curSum - k
        res = res + (prefixSum.get(diff) || 0)
        prefixSum.set(curSum,(prefixSum.get(curSum) || 0) + 1)
    }
    return res
};