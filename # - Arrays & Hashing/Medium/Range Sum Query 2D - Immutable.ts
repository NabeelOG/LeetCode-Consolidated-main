/**
 * LeetCode 304: Range Sum Query 2D - Immutable
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

class NumMatrix {
    private sumMat:number[][]
    constructor(matrix: number[][]) {
        let rows = matrix.length
        let cols = matrix[0].length

        this.sumMat = Array.from({length:rows+1},()=>Array(cols+1).fill(0))
        for(let r= 0;r<rows;r++) {
            let prefix = 0
            for(let c = 0;c<cols;c++) {
                prefix = prefix + matrix[r][c]
                let above = this.sumMat[r][c+1]
                this.sumMat[r+1][c+1] = prefix+above
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        row1++
        row2++
        col1++
        col2++
        const bottomRight = this.sumMat[row2][col2]
        const above = this.sumMat[row1-1][col2]
        const left = this.sumMat[row2][col1-1]
        const topLeft = this.sumMat[row1-1][col1-1]
        return bottomRight-above-left+topLeft
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */