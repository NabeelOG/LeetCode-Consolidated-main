/**
 * LeetCode 121: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let minPrice = Infinity

    for(let i = 0;i<prices.length;i++) {
        minPrice = Math.min(minPrice,prices[i])
        let profit = prices[i]-minPrice
        maxProfit = Math.max(maxProfit,profit)
    }
    return maxProfit
};