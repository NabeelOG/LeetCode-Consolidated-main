/**
 * LeetCode 1343: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 */

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let res = 0
    let curSum = 0

    for (let i = 0; i < k - 1; i++) {
        curSum += arr[i]
    }
    for(let L = 0;L<=arr.length-k;L++) {
        curSum += arr[L+k-1]
        if((curSum/k)>=threshold) {
            res++
        }
        curSum -=arr[L]
    }
    return res
};