/**
 * LeetCode 13: Roman to Integer
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/roman-to-integer/
 */

 function romanToInt(s: string): number {
    let prev = 0
    let result = 0
    const roman:{[key:string]:number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i = s.length-1;i>=0;i--) {
        const currV = roman[s[i]]
        if(currV<prev) {
            result = result - currV
        } else {
            result = result + currV
        }
        prev = currV
    }
    return result
};