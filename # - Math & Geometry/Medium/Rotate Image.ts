/**
 * LeetCode 48: Rotate Image
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/rotate-image/
 */

function rotate(matrix: number[][]): void {
    matrix.reverse();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}
