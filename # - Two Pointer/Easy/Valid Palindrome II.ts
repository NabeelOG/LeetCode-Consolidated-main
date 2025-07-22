/**
 * LeetCode 680: Valid Palindrome II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/valid-palindrome-ii/
 */

function validPalindrome(s: string): boolean {
    let l = 0,r = s.length - 1

    while(l<r) {
        if(s[l]!==s[r]) {
            return isPalindrome(s,l+1,r) || isPalindrome(s,l,r-1)
        }
        l++
        r--
    }
    return true
};
function isPalindrome(s:string,l:number,r:number):boolean {
    while(l<r) {
        if(s[l]!==s[r]) return false
        l++
        r--
    }
    return true
}