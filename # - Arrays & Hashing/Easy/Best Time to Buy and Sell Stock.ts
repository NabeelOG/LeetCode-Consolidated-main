/**
 * LeetCode 121: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

function maxProfit(prices: number[]): number {
    let minprice = Infinity
    let maxprofit = 0
    for(let num of prices) {
        minprice = Math.min(minprice,num)
        let profit = num - minprice
        maxprofit = Math.max(maxprofit,profit)
    }
    return maxprofit
};