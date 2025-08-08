/**
 * LeetCode 410: Split Array Largest Sum
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/split-array-largest-sum/
 */

function splitArray(nums: number[], k: number): number {
    const canSplit = (largest) => {
        let subarray = 1,
            cursum = 0;

        for (const num of nums) {
            cursum = cursum + num;
            if (cursum > largest) {
                subarray++;
                if (subarray > k) return false;
                cursum = num;
            }
        }
        return true;
    };

    let l = Math.max(...nums);
    let r = nums.reduce((a, b) => a + b, 0);
    let res = r;
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (canSplit(mid)) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
}
