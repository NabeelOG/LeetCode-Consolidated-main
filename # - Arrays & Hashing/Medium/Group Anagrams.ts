/**
 * LeetCode 49: Group Anagrams
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/group-anagrams/
 */

function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string,string[]>()
    for(let str of strs) {
        let sortStr = str.split('').sort().join()
        if(!map.has(sortStr)) {
            map.set(sortStr,[])
        }
        map.get(sortStr).push(str)
    }
    return Array.from(map.values())
};