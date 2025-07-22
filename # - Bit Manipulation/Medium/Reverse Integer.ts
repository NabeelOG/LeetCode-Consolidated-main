/**
 * LeetCode 7: Reverse Integer
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/reverse-integer/
 */

function reverse(x: number): number {
    let isNeg = x<0

    let str = isNeg?(-x).toString():x.toString()
    str = str.split('').reverse().join('')
    let num = Number(str)
    if(num>2**31-1) return 0
    return isNeg?-num:num
};