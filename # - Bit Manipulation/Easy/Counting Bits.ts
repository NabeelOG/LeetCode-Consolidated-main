/**
 * LeetCode 338: Counting Bits
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/counting-bits/
 */

function countBits(n: number): number[] {
    let res = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        if (i % 2 === 0) {
            res[i] = res[i / 2];
        } else {
            res[i] = res[i - 1] + 1;
        }
    }
    res.slice(0, n + 1);
}
