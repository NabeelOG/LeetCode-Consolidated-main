/**
 * LeetCode 69: Sqrt(x)
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/sqrtx/
 */

function mySqrt(x: number): number {
    let left = 0,
        right = x,
        result = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
