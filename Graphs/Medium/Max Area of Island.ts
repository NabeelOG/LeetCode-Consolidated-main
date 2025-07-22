/**
 * LeetCode 695. Max Area of Island
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/max-area-of-island/
 */

function maxAreaOfIsland(grid: number[][]): number {
    let ROWS = grid.length,COLS = grid[0].length
    let max = 0
    let directions = [[1,0],[-1,0],[0,1],[0,-1]]

    const dfs = (r,c) => {
        if(r<0||c<0||r>=ROWS||c>=COLS||grid[r][c]===0) {
            return 0
        }
        grid[r][c]=0
        let area = 1
        for(let [dr,dc] of directions) {
            area = area + dfs(r+dr,c+dc)
        }
        return area
    }

    let maxarea = 0
    for(let r = 0;r<ROWS;r++) {
        for(let c = 0;c<COLS;c++) {
            if(grid[r][c]===1) {
                let area = dfs(r,c)
                maxarea = Math.max(maxarea,area)
            }
        }
    }
    return maxarea
};