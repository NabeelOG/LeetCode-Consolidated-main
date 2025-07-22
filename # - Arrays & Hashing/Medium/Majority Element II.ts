/**
 * LeetCode 229: Majority Element II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/majority-element-ii/
 */

function majorityElement(nums: number[]): number[] {
    const n = nums.length
    let num1 = -1,num2 = -2,cnt1 = 0,cnt2 = 0

    for(const num of nums) {
        if(num===num1) {
            cnt1++
        } else if(num===num2) {
            cnt2++
        } else if(cnt1===0) {
            num1 = num
            cnt1++
        } else if(cnt2===0) {
            num2 = num
            cnt2++
        } else {
            cnt1--
            cnt2--
        }
    }
    cnt1 = cnt2 = 0

    for(const num of nums) {
        if(num===num1) cnt1++
        else if(num===num2) cnt2++
    }
    const res = []
    if(cnt1>Math.floor(n/3)) res.push(num1)
    if(cnt2>Math.floor(n/3)) res.push(num2)
    return res
};

/*
 * Finds all elements that appear more than ⌊n/3⌋ times in the array.
 * Uses the Boyer-Moore Majority Vote Algorithm (extended for n/3 threshold).
 * At most 2 elements can satisfy this condition, because:
 *   k elements > n/3 each ⇒ total > n if k > 2
 * 
 * Phase 1: Find two potential majority candidates.
 * Phase 2: Verify their actual counts.
 *
 * Time: O(n), Space: O(1)
 */