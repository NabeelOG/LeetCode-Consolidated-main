/**
 * LeetCode 202: Happy Number
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/happy-number/
 */

 function isHappy(n: number): boolean {
    let slow = n
    let fast = squaresum(n)
    while(fast!==slow) {
        fast = squaresum(squaresum(fast))
        slow = squaresum(slow)
    }
    return fast===1
};
function squaresum(n:number): number {
    let output = 0
    while(n!==0) {
        output += (n%10)**2
        n = Math.floor(n/10)
    }
    return output
}