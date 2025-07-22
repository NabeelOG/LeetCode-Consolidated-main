/**
 * LeetCode 5: Longest Palindromic Substring
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/longest-palindromic-substring/
 */

function longestPalindrome(s: string): string {
    let res = ""
    let resLen = 0
    const check = (l,r) => {
        while(l>=0 && r<=s.length && s[l]===s[r]) {
            if((r-l+1)>resLen) {
                res = s.substring(l,r+1)
                resLen = r-l+1
            }
            l--
            r++
        }
    }

    for(let i = 0;i<s.length;i++) {
        check(i,i)
        check(i,i+1)
    }
    return res
};