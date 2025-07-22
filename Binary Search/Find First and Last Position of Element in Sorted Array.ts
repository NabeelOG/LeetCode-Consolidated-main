/**
 * LeetCode 34: Find First and Last Position of Element in Sorted Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

function searchRange(nums: number[], target: number): number[] {
    let firstIndex = binarySearch(nums,target,false)
    if(firstIndex===-1) {
        return [-1,-1]
    }
    let lastIndex = binarySearch(nums,target,true)
    return [firstIndex,lastIndex]
};

function binarySearch(nums:number[],target:number,isLast:boolean):number {
    let posIndex = -1
    let left = 0
    let right = nums.length-1

    while(left<=right) {
        let mid = Math.floor((left+right)/2)

        if(target<nums[mid]) {
            right = mid - 1
        } else if(target>nums[mid]) {
            left = mid + 1
        } else {
            posIndex = mid
            if(isLast) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return posIndex
}