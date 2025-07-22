/**
 * LeetCode 212: Word Search II
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/word-search-ii/
 */

class TrieNode {
    children: Map<string, TrieNode>;
    word: string | null;
    
    constructor() {
        this.children = new Map<string, TrieNode>();
        this.word = null; // store the word at the end node
    }
}

function buildTrie(words: string[]): TrieNode {
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.word = word; // mark the end of the word
    }
    return root;
}

function findWords(board: string[][], words: string[]): string[] {
    const result: string[] = [];
    const root = buildTrie(words);
    const rows = board.length;
    const cols = board[0].length;
    
    function dfs(r: number, c: number, node: TrieNode) {
        const char = board[r][c];
        const childNode = node.children.get(char);
        if (!childNode) return;
        
        if (childNode.word !== null) {
            result.push(childNode.word);
            childNode.word = null; // avoid duplicate results
        }
        
        board[r][c] = '#'; // mark as visited
        
        const directions = [
            [0, 1],  // right
            [1, 0],  // down
            [0, -1], // left
            [-1, 0]  // up
        ];
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') {
                dfs(nr, nc, childNode);
            }
        }
        
        board[r][c] = char; // unmark
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (root.children.has(board[r][c])) {
                dfs(r, c, root);
            }
        }
    }
    
    return result;
}