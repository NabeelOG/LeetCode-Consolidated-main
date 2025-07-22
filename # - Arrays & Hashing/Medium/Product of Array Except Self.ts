/**
 * LeetCode 238: Product of Array Except Self
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/product-of-array-except-self/
 */

function productExceptSelf(nums: number[]): number[] {
    const length = nums.length
    const result = new Array(length)

    for(let i = 0,productToRight=1;i<length;i++) {
        result[i] = productToRight
        productToRight = productToRight * nums[i]
    }
    for(let i = length-1,productToLeft = 1;i>=0;i--) {
        result[i] = result[i] * productToLeft
        productToLeft = productToLeft * nums[i]
    }
    return result
};