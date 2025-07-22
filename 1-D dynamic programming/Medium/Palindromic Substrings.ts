/**
 * LeetCode 647: Palindromic Substrings
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/palindromic-substrings/
 */

function countSubstrings(s: string): number {
    let res = 0
    for(let i = 0;i<s.length;i++) {
        let l = i,r = i
        while(l>=0&&r<s.length && s.charAt(l)===s.charAt(r)) {
            res++
            l--
            r++
        }
        l = i,r = i+1
        while(l>=0&&r<s.length && s.charAt(l)===s.charAt(r)) {
            res++
            l--
            r++
        }
    }
    return res
};