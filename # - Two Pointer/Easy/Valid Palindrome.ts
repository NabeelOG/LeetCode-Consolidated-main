/**
 * LeetCode 125. Valid Palindrome
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/valid-palindrome/
 */

function isPalindrome(s: string): boolean {
    let l = 0,r = s.length-1
    while(l<r) {
        while(l<r && !isAlphaNum(s[l])) {
            l++
        }
        while(r>l && !isAlphaNum(s[r])) {
            r--
        }
        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++
        r--
    }
    return true
};
function isAlphaNum(a) {
    return (a>='A' && a<='Z' || a>='a' && a<='z' || a<='9' && a>='0')
}