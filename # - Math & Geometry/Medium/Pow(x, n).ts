/**
 * LeetCode 50: Pow(x, n)
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/powx-n/
 */

function myPow(x: number, n: number): number {
    function helper(x, n) {
        if (x === 0) return 0;
        if (n === 0) return 1;

        const res = helper(x * x, Math.floor(n / 2));
        return n % 2 == 0 ? res : x * res;
    }
    const res = helper(x, Math.abs(n));
    return n >= 0 ? res : 1 / res;
}
