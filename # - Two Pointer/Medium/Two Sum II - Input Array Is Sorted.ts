/**
 * LeetCode 167: Two Sum II - Input Array Is Sorted
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

function twoSum(numbers: number[], target: number): number[] {
    let l = 0;r = numbers.length-1
    while(l<r) {
        if(numbers[l]+numbers[r]<target) l++
        else if(numbers[l]+numbers[r]>target) r--
        else return [l+1,r+1]
    }
    return []
};