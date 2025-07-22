/**
 * LeetCode 752: Open the Lock
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/open-the-lock/
 */

function openLock(deadends: string[], target: string): number {
    const visit = new Set(deadends)
    if(visit.has("0000")) return -1

    const turning = (lock) => {
        let res = []
        for(let i = 0;i<4;i++) {
            const up = lock.slice(0,i)+((+lock[i]+1)%10)+lock.slice(i+1)
            const down = lock.slice(0,i)+((+lock[i]+9)%10)+lock.slice(i+1)
            res.push(up,down)
        }
        return res
    }

    const q = []
    q.push(["0000",0])
    visit.add("0000")

    while(q.length>0) {
        const [lock,turn] = q.shift()!
        if(lock===target) return turn

        for(const turned of turning(lock)) {
            if(!visit.has(turned)) {
                visit.add(turned)
                q.push([turned,turn+1])
            }
        }
    }
    return -1
};