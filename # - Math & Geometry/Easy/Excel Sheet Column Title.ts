/**
 * LeetCode 168: Excel Sheet Column Title
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/excel-sheet-column-title/
 */

function convertToTitle(columnNumber: number): string {
    if (columnNumber === 0) {
        return "";
    }
    const n = columnNumber - 1;
    return (
        convertToTitle(Math.floor(n / 26)) +
        String.fromCharCode("A".charCodeAt(0) + (n % 26))
    );
}
