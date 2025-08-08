/**
 * LeetCode 875: Koko Eating Bananas
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/koko-eating-bananas/
 */

function minEatingSpeed(piles: number[], h: number): number {
    let l = 1,
        r = Math.max(...piles),
        res = r;

    while (l <= r) {
        const k = Math.floor((l + r) / 2);
        let totaltime = 0;
        for (let pile of piles) {
            totaltime = totaltime + Math.ceil(pile / k);
        }
        if (totaltime <= h) {
            res = k;
            r = k - 1;
        } else {
            l = k + 1;
        }
    }
    return res;
}
