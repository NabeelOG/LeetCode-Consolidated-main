/**
 * LeetCode 416. Partition Equal Subset Sum
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/partition-equal-subset-sum/
 */

function canPartition(nums: number[]): boolean {
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;
    let dp = new Set<number>();
    dp.add(0);
    const target = sum / 2;
    for (let i = nums.length - 1; i >= 0; i--) {
        const nextDp = new Set<number>();
        for (const t of dp) {
            if (t + nums[i] === target) {
                return true;
            }
            nextDp.add(t + nums[i]);
            nextDp.add(t);
        }
        dp = nextDp;
    }
    return false;
}
