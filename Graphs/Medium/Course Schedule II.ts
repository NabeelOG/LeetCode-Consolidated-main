/**
 * LeetCode 210. Course Schedule II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/course-schedule-ii/
 */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const prereq = new Map()

    for(const [course,pre] of prerequisites) {
        if(!prereq.has(course)) {
            prereq.set(course,[])
        }
        prereq.get(course).push(pre)
    }

    const output = []
    const visit = new Set()
    const cycle = new Set()

    function dfs(crs) {
        if(cycle.has(crs)) return false
        if(visit.has(crs)) return true
        cycle.add(crs)
        for(const pre of prereq.get(crs) || []) {
            if(!dfs(pre)) {
                return false
            }
        }
        cycle.delete(crs)
        visit.add(crs)
        output.push(crs)
        return true
    }

    for(let c = 0;c<numCourses;c++) {
        if(!dfs(c)) {
            return []
        }
    }
    return output
};