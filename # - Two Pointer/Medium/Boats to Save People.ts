/**
 * LeetCode 881: Boats to Save People
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/boats-to-save-people/
 */

function numRescueBoats(people: number[], limit: number): number {
    people.sort((a,b)=>a-b)
    let res = 0,l = 0,r = people.length-1

    while(l<=r) {
        let remain = limit - people[r]
        res++
        r--
        if(l<=r && remain >=people[l]) {
            l++
        }
    }
    return res
};