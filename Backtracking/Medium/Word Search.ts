/**
 * LeetCode 79: Word Search
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/word-search/
 */

function exist(board: string[][], word: string): boolean {
    const ROWS = board.length
    const COLS = board[0].length

    const dfs = (r,c,i) => {
        if(i===word.length) return true
        if(r<0||c<0||r>=ROWS||c>=COLS||board[r][c]!==word[i] || board[r][c]==='visited') {
            return false
        }
        board[r][c] = 'visited';
        const res = dfs(r+1,c,i+1)||dfs(r,c+1,i+1)||dfs(r-1,c,i+1)||dfs(r,c-1,i+1)
        board[r][c]=word[i]
        return res
    }

    for(let i = 0;i<ROWS;i++) {
        for(let j = 0;j<COLS;j++) {
            if(dfs(i,j,0)) return true
        }
    }
    return false
};