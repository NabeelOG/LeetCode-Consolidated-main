/**
 * LeetCode 189: Rotate Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/rotate-array/
 */

function rotate(nums: number[], k: number): void {
    const n = nums.length
    k = k%n
    const reverse = (l,r) => {
        while(l<r) {
            [nums[l],numa[r]] = [nums[r],nums[l]]
            l++
            r--
        }
    }
    reverse(0,n-1)
    reverse(0,k-1)
    reverse(k,n-1)
};


// 1 2 3 4 5 6 7    nums
// 7 6 5 4 3 2 1    reverse(0,n-1)
// 5 6 7 4 3 2 1    reverse(0,k-1)
// 5 6 7 1 2 3 4    reverse(k,n-1)