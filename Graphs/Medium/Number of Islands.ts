/**
 * LeetCode 200. Number of Islands
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/number-of-islands/
 */

function numIslands(grid: string[][]): number {
    const ROWS = grid.length,COLS = grid[0].length
    let island = 0
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]

    const dfs = (r,c) => {
        if(r<0||c<0||r>=ROWS||c>=COLS||grid[r][c]==='0') {
            return
        }
        grid[r][c] = '0'
        for(let [dr,dc] of directions) {
            dfs(r+dr,c+dc)
        }
    }

    for(let r = 0;r<ROWS;r++) {
        for(let c = 0;c<COLS;c++) {
            if(grid[r][c]==='1') {
                dfs(r,c)
                island++
            }
        }
    }
    return island
};