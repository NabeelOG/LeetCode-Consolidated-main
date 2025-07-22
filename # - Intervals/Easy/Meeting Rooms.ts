/**
 * LeetCode Meeting Rooms
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/meeting-rooms/
 */

canAttendMeetings(intervals) {
    intervals.sort((a,b)=>a.start - b.start)
    for(let i = 1;i<intervals.length;i++) {
        if(intervals[i-1].end>intervals[i].start) {
            return false
        }
    }
    return true
}