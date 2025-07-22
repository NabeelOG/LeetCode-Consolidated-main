/**
 * LeetCode 287: Find the Duplicate Number
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/find-the-duplicate-number/
 */

function findDuplicate(nums: number[]): number {
    let slow = 0,fast = 0

    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    }while(slow!==fast)

    let slow2 = 0
    while(slow!==slow2) {
        slow = nums[slow]
        slow2 = nums[slow2]
    }
    return slow2
};