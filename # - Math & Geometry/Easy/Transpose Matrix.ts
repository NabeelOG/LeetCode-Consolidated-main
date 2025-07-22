/**
 * LeetCode 867: Transpose Matrix
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/transpose-matrix/
 */

function transpose(matrix: number[][]): number[][] {
    const rows = matrix.length,
        cols = matrix[0].length;

    if (rows === cols) {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < r; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }
        return matrix;
    }
    const res = Array.from({ length: cols }, () => Array(rows).fill(0));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            res[c][r] = matrix[r][c];
        }
    }
    return res;
}
