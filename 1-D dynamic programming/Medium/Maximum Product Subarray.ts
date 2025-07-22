/**
 * LeetCode 152: Maximum Product Subarray
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/maximum-product-subarray/
 */

function maxProduct(nums: number[]): number {
    let curmin = 1,curmax = 1, res = Math.max(...nums)

    for(let num of nums) {
        let temp = curmax*num
        curmax = Math.max(curmax*num,curmin*num,num)
        curmin = Math.min(temp,curmin*num,num)
        res = Math.max(res,curmax)
    }
    return res
};