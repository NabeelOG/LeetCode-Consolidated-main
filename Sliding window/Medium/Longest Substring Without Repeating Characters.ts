/**
 * LeetCode 3: Longest Substring Without Repeating Characters
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

function lengthOfLongestSubstring(s: string): number {
    let i = 0,j = 0,max = 0
    let set = new Set()
    while(i<s.length) {
        if(!set.has(s[i])) {
            set.add(s[i])
            // console.log(set)
            i++
            max = Math.max(max,set.size)
        } else {
            set.delete(s[j++])
            // console.log(set)
        }
    }
    return max
};