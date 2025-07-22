/**
 * LeetCode 43: Multiply Strings
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/multiply-strings/
 */

function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";

    const res = new Array(num1.length + num2.length).fill(0);
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    for (let i1 = 0; i1 < num1.length; i1++) {
        for (let i2 = 0; i2 < num2.length; i2++) {
            const digit = parseInt(num1[i1]) * parseInt(num2[i2]);
            res[i1 + i2] = res[i1 + i2] + digit;
            res[i1 + i2 + 1] = res[i1 + i2 + 1] + Math.floor(res[i1 + i2] / 10);
            res[i1 + i2] = res[i1 + i2] % 10;
        }
    }
    let result = "";
    let i = res.length - 1;

    while (i >= 0 && res[i] === 0) {
        i--;
    }
    while (i >= 0) {
        result = result + res[i--];
    }
    return result;
}
