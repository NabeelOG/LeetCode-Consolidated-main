/**
 * LeetCode 1011: Capacity To Ship Packages Within D Days
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 */

function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canShip(weights, mid, days)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function canShip(weights: number[], capacity: number, days: number): boolean {
    let ship = 1,
        cap = capacity;

    for (let w of weights) {
        if (cap - w < 0) {
            ship++;
            cap = capacity;
        }
        cap = cap - w;
    }
    return ship <= days;
}
