/**
 * LeetCode 130: Surrounded Regions
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/surrounded-regions/
 */

function solve(board: string[][]): void {
    let ROWS = board.length, COLS = board[0].length

    const capture = (r, c) => {
        if (r < 0 || c < 0 || r === ROWS || c === COLS || board[r][c] !== 'O') {
            return;
        }
        board[r][c] = "T"
        capture(r + 1, c)
        capture(r, c + 1)
        capture(r - 1, c)
        capture(r, c - 1)
    }

    for (let r = 0; r < ROWS; r++) {
        if (board[r][0] === 'O') capture(r, 0)
        if (board[r][COLS - 1] === 'O') capture(r, COLS - 1)
    }
    for (let c = 0; c < COLS; c++) {
        if (board[0][c] === 'O') capture(0, c)
        if (board[ROWS - 1][c] === 'O') capture(ROWS - 1, c)
    }

    for(let r = 0;r<ROWS;r++) {
        for(let c = 0;c<COLS;c++) {
            if(board[r][c]==='O') board[r][c]='X'
            else if(board[r][c]==='T') board[r][c]='O'
        }
    }
};