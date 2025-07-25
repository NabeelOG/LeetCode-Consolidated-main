/**
 * LeetCode 424: Longest Repeating Character Replacement
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-repeating-character-replacement/
 */

function characterReplacement(s: string, k: number): number {
    let count = new Map()
    let L = 0, maxfreq = 0, res = 0

    for (let R = 0; R < s.length; R++) {
        count.set(s[R],(count.get(s[R])||0)+1)
        maxfreq = Math.max(count.get(s[R]),maxfreq)

        while((R-L+1)-maxfreq>k) {
            count.set(s[L],count.get(s[L])-1)
            L++
        }
        res = Math.max(res,R-L+1)
    }
    return res
};