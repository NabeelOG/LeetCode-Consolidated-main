/**
 * LeetCode 67: Add Binary
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/add-binary/
 */

function addBinary(a: string, b: string): string {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    let res = [];
    let carry = 0;

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const digitA = i < a.length ? parseInt(a[i]) : 0;
        const digitB = i < b.length ? parseInt(b[i]) : 0;

        const total = digitA + digitB + carry;
        const char = total % 2;
        res.push(char);
        carry = Math.floor(total / 2);
    }
    if (carry > 0) {
        res.push(1);
    }
    return res.reverse().join("");
}
