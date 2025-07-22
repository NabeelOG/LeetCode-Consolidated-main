/**
 * LeetCode 91: Decode Ways
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/decode-ways/
 */

function numDecodings(s: string): number {
    const n = s.length
    const dp = new Array(n+1).fill(0)
    dp[0] = 1

    if(s[0]==='0') dp[1] = 0
    else dp[1] = 1

    for(let i = 2;i<=n;i++) {
        if(s[i-1]!=='0') {
            dp[i] = dp[i]+dp[i-1]
        }

        const twoD = parseInt(s.substring(i-2,i),10)
        if(twoD>=10 && twoD<=26) {
            dp[i] = dp[i]+dp[i-2]
        }
    }
    return dp[n]
};