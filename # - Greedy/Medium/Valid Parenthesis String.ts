/**
 * LeetCode 678: Valid Parenthesis String
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/valid-parenthesis-string/
 */

function checkValidString(s: string): boolean {
    const left = []
    const star = []
    for(let i = 0;i<s.length;i++) {
        const ch = s[i]
        if(ch==='(') {
            left.push(i)
        } else if(ch==='*') {
            star.push(i)
        } else {
            if(left.length===0 && star.length===0) {
                return false
            }
            if(left.length>0) {
                left.pop()
            } else {
                star.pop()
            }
        }
    }

    while(left.length>0 && star.length>0) {
        if(left.pop()>star.pop()) return false
    }
    return left.length===0
};