/**
 * LeetCode 135: Candy
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/candy/
 */

function candy(ratings: number[]): number {
    const n = ratings.length
    const arr = new Array(n).fill(1)

    for(let i = 1;i<n;i++) {
        if(ratings[i-1]<ratings[i]) {
            arr[i] = arr[i-1]+1
        }
    }
    for(let i = n-2;i>=0;i--) {
        if(ratings[i]>ratings[i+1]) {
            arr[i] = Math.max(arr[i],arr[i+1]+1)
        }
    }

    return arr.reduce((sum,num)=>sum+num,0)
};