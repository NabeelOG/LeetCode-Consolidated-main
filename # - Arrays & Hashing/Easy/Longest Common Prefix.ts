/**
 * LeetCode 14: Longest Common Prefix
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return ""
    }
    strs.sort()
    let result = ""
    let first = strs[0]
    let last = strs[strs.length - 1]
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            break
        }
        result = result + first[i]
    }
    return result
};