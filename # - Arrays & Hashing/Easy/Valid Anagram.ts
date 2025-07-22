/**
 * LeetCode 242: Valid Anagram
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/valid-anagram/
 */

function isAnagram(s: string, t: string): boolean {
    if(s.length!==t.length) {
        return false
    }
    let countS:{[key:string]:number}={}
    let countT:{[key:string]:number}={}
    for(let i = 0;i<s.length;i++) {
        countS[s[i]] = (countS[s[i]] || 0)+1 
        countT[t[i]] = (countT[t[i]] || 0)+1 
    }
    for(const key in countS) {
        if(countS[key]!==countT[key]) {
            return false
        }
    }
    return true
};