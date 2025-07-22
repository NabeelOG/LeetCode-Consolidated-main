/**
 * LeetCode 1871: Jump Game VII
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/jump-game-vii/
 */

function canReach(s: string, minJump: number, maxJump: number): boolean {
    const n =  s.length
    const q:number[] = [0]
    let farthest = 0

    while(q.length>0) {
        const i = q.shift()!
        const start = Math.max(i+minJump,farthest+1)
        const end = Math.min(i+maxJump,n)

        for(let j = start;j<=end;j++) {
            if(s[j]==='0') {
                if(j===n-1) return true
                q.push(j)
            }
        }
        farthest = i+maxJump
    }
    return false
};