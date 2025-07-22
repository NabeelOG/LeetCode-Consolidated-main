/**
 * LeetCode 208: Implement Trie (Prefix Tree)
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/implement-trie-prefix-tree/
 */

class TrieNode {
    children:TrieNode[]
    endofword:boolean;
    constructor() {
        this.children = new Array(26).fill(null)
        this.endofword = false
    }
}
class Trie {
    root:TrieNode;
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let cur = this.root
        for(let c of word) {
            const i = c.charCodeAt(0)-97;
            if(cur.children[i]===null) {
                cur.children[i] = new TrieNode()
            }
            cur = cur.children[i]
        }
        cur.endofword = true
    }

    search(word: string): boolean {
        let cur = this.root
        for(let c of word) {
            const i = c.charCodeAt(0)-97
            if(cur.children[i]===null) return false
            cur = cur.children[i]
        }
        return cur.endofword
    }

    startsWith(prefix: string): boolean {
        let cur = this.root
        for(let c of prefix) {
            const  i = c.charCodeAt(0)-97
            if(cur.children[i]===null) return false
            cur = cur.children[i]
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */