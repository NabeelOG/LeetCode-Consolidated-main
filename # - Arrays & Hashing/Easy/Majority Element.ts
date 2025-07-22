/**
 * LeetCode 169: Majority Element
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/majority-element/
 */

function majorityElement(nums: number[]): number {
    let candidate = 0
    let count = 0
    for(let num of nums) {
        if(count===0) {
            candidate = num
        }
        if(num===candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate
};