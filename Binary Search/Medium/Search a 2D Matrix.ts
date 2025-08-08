/**
 * LeetCode 74: Search a 2D Matrix
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/search-a-2d-matrix/
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    let n = matrix.length;
    let m = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;

        let midVal = matrix[row][col];
        if (midVal === target) {
            return true;
        } else if (midVal > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}
