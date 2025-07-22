/**
 * LeetCode 1899: Merge Triplets to Form Target Triplet
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
 */

function mergeTriplets(triplets: number[][], target: number[]): boolean {
    const good = new Set()

    for(const t of triplets) {
        if(t[0]>target[0] || t[1]>target[1] || t[2]>target[2]) {
            continue
        }
        for(let i = 0;i<t.length;i++) {
            if(t[i]===target[i]) {
                good.add(i)
            }
        }
    }
    return good.size === 3
};