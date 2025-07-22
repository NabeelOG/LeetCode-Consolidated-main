/**
 * LeetCode 846: Hand of Straights
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/hand-of-straights/
 */

function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(hand.length%groupSize!==0) return false
    
    const count = new Map()
    hand.forEach(num=>count.set(num,(count.get(num)||0)+1))

    for(const num of hand) {
        let start = num
        while(count.get(start-1)>0) {
            start--
        }

        while(start<=num) {
            while(count.get(start)>0) {
                for(let i = start;i<start+groupSize;i++) {
                    if(!count.get(i)) return false
                    count.set(i,count.get(i)-1)
                }
            }
            start++
        }
    }
    return true
};