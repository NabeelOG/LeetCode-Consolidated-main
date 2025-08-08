/**
 * LeetCode 374: Guess Number Higher or Lower
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/guess-number-higher-or-lower/
 */

function guessNumber(n: number): number {
    let l = 1,
        r = n;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let g = guess(mid);

        if (g === 0) return mid;
        else if (g === 1) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return 0;
}
