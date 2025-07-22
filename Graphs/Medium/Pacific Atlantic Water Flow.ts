/**
 * LeetCode 417: Pacific Atlantic Water Flow
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/pacific-atlantic-water-flow/
 */

function pacificAtlantic(heights: number[][]): number[][] {
    let ROWS = heights.length, COLS = heights[0].length
    let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false))
    let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

    const dfs = (r,c,ocean) => {
        ocean[r][c] = true
        let directions = [[1,0],[-1,0],[0,1],[0,-1]]
        for(let [dr,dc] of directions) {
            let nr = r+dr,nc = c+dc;
            if(nr>=0&&nc>=0&&nr<ROWS&&nc<COLS&&!ocean[nr][nc]&&heights[nr][nc]>=heights[r][c]) {
                dfs(nr,nc,ocean)
            }
        }
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac)
        dfs(r, COLS - 1, atl)
    }
    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac)
        dfs(ROWS-1, c, atl)
    }

    let res = []
    for(let r = 0;r<ROWS;r++) {
        for(let c = 0;c<COLS;c++) {
            if(pac[r][c]&&atl[r][c]) {
                res.push([r,c])
            }
        }
    }
    return res
};