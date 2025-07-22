/**
 * LeetCode 1851: Minimum Interval to Include Each Query
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/minimum-interval-to-include-each-query/
 */

function minInterval(intervals: number[][], queries: number[]): number[] {
    intervals.sort((a,b)=>a[0]-b[0])
    const minHeap = new MinPriorityQueue(entry => entry[0])
    const res = []
    let i = 0

    const sortedQueries = [...queries].sort((a,b)=>a-b)

    for(const q of sortedQueries) {
        while(i<intervals.length && intervals[i][0]<=q) {
            const [l,r] = intervals[i]
            minHeap.enqueue([r-l+1,r])
            i = i + 1
        }

        while(!minHeap.isEmpty() && minHeap.front()[1]<q) {
            minHeap.dequeue()
        }
        res[q] = !minHeap.isEmpty()?minHeap.front()[0]:-1
    }
    return queries.map(q=>res[q])
};