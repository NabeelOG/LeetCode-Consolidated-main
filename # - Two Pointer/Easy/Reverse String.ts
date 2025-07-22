/**
 * LeetCode 344: Reverse String
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/reverse-string/
 */

function reverseString(s:string[]):void {
    let l = 0,r = s.length-1
    while(l<r) {
        [s[l],s[r]] = [s[r],s[l]]
        l++
        r--
    }
}