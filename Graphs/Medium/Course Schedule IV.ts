/**
 * LeetCode 1462. Course Schedule IV
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/course-schedule-iv/
 */

function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    let adj = Array.from({length:numCourses},()=>[])

    let preMap = new Map() 

    for(let [pre,crs] of prerequisites) {
        adj[crs].push(pre)
    }

    const dfs = (crs) => {
        if(preMap.has(crs)) {
            return preMap.get(crs)
        }

        const prereqs = new Set()
        for(const pre of adj[crs]) {
            for(const p of dfs(pre)) {
                prereqs.add(p)
            }
        }
        prereqs.add(crs)
        preMap.set(crs,prereqs)
        return prereqs
    }

    for(let c = 0;c<numCourses;c++) {
        dfs(c)
    }
    return queries.map(([u,v])=>preMap.get(v).has(u))
};