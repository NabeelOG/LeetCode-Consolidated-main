/**
 * LeetCode 75: Sort Colors
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/sort-colors/
 */

function sortColors(nums: number[]): void {
    let low = 0,mid= 0,high = nums.length-1
    while(mid<=high) {
        if(nums[mid]===0) {
            [nums[low],nums[mid]] = [nums[mid],nums[low]]
            low++
            mid++
        } else if(nums[mid]===1){
            mid++
        } else {
            [nums[high],nums[mid]] = [nums[mid],nums[high]]
            high--
        }
    }
};