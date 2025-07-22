/**
 * LeetCode 211: Design Add and Search Words Data Structure
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */

class WordDictionary {
    private words:Set<string>[]
    constructor() {
        this.words = Array.from({length:26},()=>new Set())
    }

    addWord(word: string): void {
        this.words[word.length-1].add(word)
    }

    search(word: string): boolean {
        let hasDot = word.includes('.')
        const set = this.words[word.length-1]
        if(!hasDot) {
            return set.has(word)
        }

        for(const w of set) {
            let i = 0
            while(i<word.length) {
                if(word[i]==='.') {
                    i++
                    continue
                }
                if(word[i]!==w[i]) {
                    break
                }
                i++
            }
            if(i===word.length) {
                return true
            }
        }
        return false
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */