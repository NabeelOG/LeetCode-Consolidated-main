/**
 * LeetCode 322: Coin Change
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/coin-change/
 */

function coinChange(coins: number[], amount: number): number {
    let memo = {}

    const dfs = (amount) => {
        if(amount===0) return 0
        if(memo[amount]!==undefined) {
            return memo[amount]
        }
        let res = Infinity
        for(let coin of coins) {
            if(amount-coin>=0) {
                res = Math.min(res,1+dfs(amount-coin))
            }
        }
        memo[amount] = res
        return res
    }

    const mincoins = dfs(amount)
    return mincoins===Infinity?-1:mincoins
};