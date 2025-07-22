/**
 * LeetCode 303: Range Sum Query - Immutable
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/range-sum-query-immutable/
 */

class NumArray {
    private prefix:number[] = []
    constructor(nums: number[]) {
        let cur = 0
        for(let num of nums) {
            cur = cur + num
            this.prefix.push(cur)
        }
    }

    sumRange(left: number, right: number): number {
        const rightSum = this.prefix[right]
        const leftSum = left>0 ? this.prefix[left-1] : 0 ;
        return rightSum - leftSum
    }
}