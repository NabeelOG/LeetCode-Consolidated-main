/**
 * LeetCode Meeting Rooms II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/meeting-rooms-ii/
 */

minMeetingRooms(intervals) {
    const start = intervals.map(i=>i.start).sort((a,b)=>a-b)
    const end = intervals.map(i=>i.end).sort((a,b)=>a-b)

    let res = 0,count = 0,s = 0, e = 0
    while(s<intervals.length) {
        if(start[s]<end[e]) {
            s++
            count++
        } else {
            e++
             count--
        }
        res = Math.max(count,res)
    }
    return res
}