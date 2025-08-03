/**
 * LeetCode 682: Baseball Game
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/baseball-game/
 */

function calPoints(operations: string[]): number {
    let stack:number[]=[]
    for(let i = 0;i<operations.length;i++) {
        if(operations[i]==='+') {
            const top = stack.pop()
            const newTop = top + stack[stack.length-1]
            stack.push(top)
            stack.push(newTop)
        } else if(operations[i]==='D') {
            stack.push(2*stack[stack.length-1])
        } else if(operations[i]==="C") {
            stack.pop()
        } else {
            stack.push(Number(operations[i]))
        }
    }
    return stack.reduce((a,b)=>a+b,0)
};