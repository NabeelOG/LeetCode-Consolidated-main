/**
 * LeetCode 207: Course Schedule
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/course-schedule/
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const preMap = new Map()
    for(let i = 0;i<numCourses;i++) {
        preMap.set(i,[])
    }
    for(let [crs,pre] of prerequisites) {
        preMap.get(crs).push(pre)
    }
    const visit = new Set()
    const dfs = (crs) => {
        if(visit.has(crs)) return false
        if(preMap.get(crs).length===0) {
            return true
        }
        visit.add(crs)
        for(let pre of preMap.get(crs)) {
            if(!dfs(pre)) {
                return false
            }
        }
        visit.delete(crs)
        preMap.set(crs,[]) //memoization
        return true
    }

    for(let c = 0;c<numCourses;c++) {
        if(!dfs(c)) {
            return false
        }
    }
    return true
};