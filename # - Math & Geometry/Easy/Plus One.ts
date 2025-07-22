/**
 * LeetCode 66: Plus One
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/plus-one/
 */

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    if (digits[0] === 0) {
        return [1, ...digits];
    }
    return digits;
}
