/**
 * LeetCode 978: Longest Turbulent Subarray
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-turbulent-subarray/description/
 */

function maxTurbulenceSize(arr: number[]): number {
    let l = 0,r = 1,prev = '',res = 1

    while(r<arr.length) {
        if(arr[r-1]<arr[r] && prev!=='<') {
            res = Math.max(res,r-l+1)
            r++
            prev = '<'
        }
        else if(arr[r-1]>arr[r] && prev!=='>') {
            res = Math.max(res,r-l+1)
            r++
            prev = '>'
        } else {
            r = (arr[r-1]===arr[r])?r+1:r
            l = r-1
            prev=''
        }
    }
    return res
};