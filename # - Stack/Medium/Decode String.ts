/**
 * LeetCode 394: Decode String
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/decode-string/
 */

function decodeString(s: string): string {
    const stack = []

    for(let i = 0;i<s.length;i++) {
        const ch = s[i]

        if(ch!==']') {
            stack.push(ch)
        } else {
            let substr = ""
            while(stack.length && stack[stack.length-1]!=='[') {
                substr = stack.pop()+substr
            }
            stack.pop()
            let k = ""
            while(stack.length>0 && !isNaN(stack[stack.length-1])) {
                k = stack.pop() + k
            }
            stack.push(substr.repeat(parseInt(k,10)))
        }
    }
    return stack.join("")
};