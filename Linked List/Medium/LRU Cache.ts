/**
 * LeetCode 146: LRU Cache
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/lru-cache/
 */

class LRUCache {
    private cache:Map<number,number>
    private capacity:number
    constructor(capacity: number) {
        this.cache = new Map()
        this.capacity = capacity
    }

    get(key: number): number {
        if(!this.cache.has(key)) return -1
        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key,value)
        return value
    }

    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        } else if(this.cache.size===this.capacity) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
        this.cache.set(key,value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */