/**
 * LeetCode 2013: Detect Squares
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/detect-squares/
 */

class DetectSquares {
    private ptsCount: Map<string, number>;
    private pts: [number, number][] = [];
    constructor() {
        this.ptsCount = new Map();
        this.pts = [];
    }

    add(point: number[]): void {
        const p = point.join(",");
        this.ptsCount.set(p, (this.ptsCount.get(p) || 0) + 1);
        this.pts.push(point as [number, number]);
    }

    count(point: number[]): number {
        let res = 0;
        const [px, py] = point;
        for (const [x, y] of this.pts) {
            if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) {
                continue;
            }
            res =
                res +
                (this.ptsCount.get(`${x},${py}`) || 0) *
                    (this.ptsCount.get(`${px},${y}`) || 0);
        }
        return res;
    }
}
