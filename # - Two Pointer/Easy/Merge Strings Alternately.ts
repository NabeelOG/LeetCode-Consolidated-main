/**
 * LeetCode 1768: Merge Strings Alternately
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/merge-strings-alternately/
 */

function mergeAlternately(word1: string, word2: string): string {
    const n = word1.length,m = word2.length
    const res = []
    let i = 0,j = 0
    while(i<n||j<m) {
        if(i<n) res.push(word1[i++])
        if(j<m) res.push(word2[j++])
    }
    return res.join("")
};