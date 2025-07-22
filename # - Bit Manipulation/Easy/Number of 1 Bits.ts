/**
 * LeetCode 191: Number of 1 Bits
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/number-of-1-bits/
 */

function hammingWeight(n: number): number {
    let res = 0;
    while (n !== 0) {
        res = res + (n % 2);
        n = n >> 1;
    }
    return res;
}
