/**
 * LeetCode 128: Longest Consecutive Sequence
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-consecutive-sequence/
 */

function longestConsecutive(nums: number[]): number {
    let set = new Set(nums)
    let longest = 0

    for(let num of set) {
        if(!set.has(num-1)) {
            let length = 1
            while(set.has(num+length)) {
                length++
            }
            longest = Math.max(longest,length)
        }
    }
    return longest
}
