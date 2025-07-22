/**
 * LeetCode 73: Set Matrix Zeroes
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/set-matrix-zeroes/
 */

function setZeroes(matrix: number[][]): void {
    let rows = matrix.length,cols = matrix[0].length
    const rowZero = new Array(rows).fill(false)
    const colZero = new Array(cols).fill(false)

    for(let r = 0;r<rows;r++) {
        for(let c = 0;c<cols;c++) {
            if(matrix[r][c]===0) {
                rowZero[r] = true
                colZero[c] = true
            }
        }
    }
    for(let r = 0;r<rows;r++) {
        for(let c = 0;c<cols;c++) {
            if(rowZero[r]||colZero[c]) {
                matrix[r][c] = 0
            }
        }
    }
};