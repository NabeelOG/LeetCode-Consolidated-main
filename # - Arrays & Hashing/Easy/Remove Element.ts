/**
 * LeetCode 27: Remove Element
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/remove-element/
 */

function removeElement(nums: number[], val: number): number {
    let notfind = 0
    for(let i = 0;i<nums.length;i++) {
        if(nums[i]!==val) {
            nums[notfind] = nums[i]
            notfind++
        }
    }
    return notfind
};