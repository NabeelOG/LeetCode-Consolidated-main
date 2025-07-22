/**
 * LeetCode 994: Rotting Oranges
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/rotting-oranges/
 */

function orangesRotting(grid: number[][]): number {
    const q = []
    let fresh = 0, time = 0
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let ROWS = grid.length, COLS = grid[0].length

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) fresh++
            if (grid[r][c] === 2) q.push([r, c])
        }
    }

    while (fresh > 0 && q.length > 0) {
        const length = q.length
        for(let i = 0;i<length;i++) {
            const [currR,currC] = q.shift()
            for(let [dr,dc] of directions) {
                let row = currR+dr,col = currC+dc
                if(row>=0&&col>=0&&row<ROWS&&col<COLS&&grid[row][col]===1) {
                    grid[row][col] = 2
                    q.push([row,col])
                    fresh--
                }
            }
        }
        time++
    }
    return fresh===0?time:-1
};