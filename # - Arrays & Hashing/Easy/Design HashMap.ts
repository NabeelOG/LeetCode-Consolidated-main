/**
 * LeetCode 706. Design HashMap
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/design-hashmap/
 */

class MyHashMap {
    map = new Array(1000001).fill(-1)
    constructor() {
    }

    put(key: number, value: number): void {
        this.map[key] = value
    }

    get(key: number): number {
        return this.map[key]
    }

    remove(key: number): void {
        this.map[key] = -1
    }
}