/**
 * LeetCode 1071: Greatest Common Divisor of Strings
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/greatest-common-divisor-of-strings/
 */

function gcdOfStrings(str1: string, str2: string): string {
    function gcd(a: number, b: number): number {
        return b === 0 ? a : gcd(b, a % b);
    }
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
}
