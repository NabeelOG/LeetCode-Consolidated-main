/**
 * LeetCode 150: Evaluate Reverse Polish Notation
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

function evalRPN(tokens: string[]): number {
    const stack = []

    for(let c of tokens) {
        if(c==='+') {
            stack.push(stack.pop()+stack.pop())
        } else if(c==='-') {
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b-a)
        } else if(c==='/') {
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Math.trunc(b/a))
        } else if(c==='*') {
            stack.push(stack.pop()*stack.pop())
        } else {
            stack.push(parseInt(c))
        }
    }
    return stack.pop()
};