/**
 * LeetCode 122: Best Time to Buy and Sell Stock II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

function maxProfit(prices: number[]): number {
    let n = prices.length
    if(!prices || n<2) return 0

    let leftbuy = 0
    let rightsell = 1
    let profit = 0
    while(rightsell<n) {
        const currprice = prices[leftbuy]
        const futprice = prices[rightsell]
        if(currprice<futprice) {
            const gain = futprice - currprice
            profit = profit + gain
            leftbuy = rightsell
        } else {
            leftbuy = rightsell
        }
        rightsell++
    }
    return profit
};