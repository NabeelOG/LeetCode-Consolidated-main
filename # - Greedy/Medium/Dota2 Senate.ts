/**
 * LeetCode 649: Dota2 Senate
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/dota2-senate/
 */

function predictPartyVictory(senate: string): string {
    const R = new Queue()
    const D = new Queue()
    const n = senate.length

    for(let i = 0;i<n;i++)  {
        if(senate[i]==="R") {
            R.push(i)
        } else {
            D.push(i)
        }
    }

    while(!R.isEmpty() && !D.isEmpty()) {
        const rTurn = R.pop()
        const dTurn = D.pop()

        if(rTurn<dTurn) {
            R.push(Number(rTurn)+n)
        } else {
            D.push(Number(dTurn)+n)
        }
    }

    return !R.isEmpty()?"Radiant":"Dire";
};