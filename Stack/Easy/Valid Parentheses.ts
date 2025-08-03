/**
 * LeetCode 20: Valid Parentheses
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/valid-parentheses/
 */

function isValid(s: string): boolean {
    const stack:string[] = []
    for(let i = 0;i<s.length;i++) {
        switch(s[i]) {
            case '(':
                stack.push(')')
                break;
            case '[':
                stack.push(']')
                break
            case '{':
                stack.push('}')
                break
            default:
                if(s[i]!==stack.pop()) {
                    return false
                }
        }
    }
    return stack.length===0
};