/**
 * LeetCode 705: Design HashSet
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/design-hashset/
 */

class MyHashSet {
    arr = Array(393241).fill(undefined)
    constructor() {
        
    }

    add(key: number): void {
        let hashKey = this.hash(key)
        if(this.arr[hashKey]===undefined) {
           this.arr[hashKey] = key
        }
    }

    remove(key: number): void {
        let hashKey = this.hash(key)
        if(this.arr[hashKey]===key) {
            this.arr[hashKey] = undefined
        }
    }

    contains(key: number): boolean {
        let hashKey = this.hash(key)
        return this.arr[hashKey]===undefined?false:true
    }
    hash(key:number):number {
        return key%393241
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */