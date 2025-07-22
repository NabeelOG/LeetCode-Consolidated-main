/**
 * LeetCode 2402: Meeting Rooms III
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/meeting-rooms-iii/
 */

function mostBooked(n: number, meetings: number[][]): number {
    meetings.sort((a,b)=>a[0]-b[0])
    const available = new PriorityQueue<number>((a,b)=>a-b)
    const used = new PriorityQueue<[number, number]>((a,b)=>(a[0]===b[0]?a[1]-b[1]:a[0]-b[0]))

    for(let i = 0;i<n;i++) {
        available.enqueue(i)
    }
    const count = new Array(n).fill(0)

    for(const [start,end] of meetings) {
        while(!used.isEmpty() && used.front()[0]<=start) {
            const room = used.dequeue()[1]
            available.enqueue(room)
        }

        let room;
        let newEnd = end;
        if(available.isEmpty()) {
            const [endTime,usedRoom] = used.dequeue()
            newEnd = endTime + (end-start)
            available.enqueue(usedRoom);
        }

        room = available.dequeue()
        used.enqueue([newEnd,room])
        count[room]++
    }

    return count.indexOf(Math.max(...count));
};