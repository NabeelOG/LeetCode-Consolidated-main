/**
 * LeetCode 347: Top K Frequent Elements
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/top-k-frequent-elements/
 */

function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map()

    for(let num of nums) {
        map.set(num,(map.get(num) || 0)+1)
    }

    // let minHeap:[number,number][] = []
    
    // for(let [num,freq] of map.entries()) {
    //     minHeap.push([num,freq])
    //     minHeap.sort((a,b)=>a[1]-b[1])

    //     if(minHeap.length>k) {
    //         minHeap.shift()
    //     }
    //     return minHeap.map(a=>a[0])
    // }

    // console.log(map)
    let result = [...map.entries()].sort((a,b)=>b[1]-a[1]).map(num=>num[0]).slice(0,k)
    // console.log(result)
    return result
};