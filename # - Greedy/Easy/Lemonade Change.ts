/**
 * LeetCode 860: Lemonade Change
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/lemonade-change/
 */

function lemonadeChange(bills: number[]): boolean {
    let ten = 0,five = 0
    for(let b of bills) {
        if(b===5) five++
        else if(b===10) {
            ten++
            five--
        } else if(ten>0) {
            ten--
            five--
        } else {
            five -= 3
        }
        if(five<0) {
            return false
        }
    }
    return true
};