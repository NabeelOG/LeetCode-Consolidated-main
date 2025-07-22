/**
 * LeetCode 2707: Extra Characters in a String
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/extra-characters-in-a-string/
 */

function minExtraChar(s: string, dictionary: string[]): number {
    const n = s.length;
    const dictSet = new Set(dictionary);
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const substring = s.slice(i, j);
            if (dictSet.has(substring)) {
                dp[j] = Math.min(dp[i], dp[j]);
            } else {
                dp[j] = Math.min(dp[j], dp[i] + (j - i));
            }
        }
    }
    return dp[n];
}
