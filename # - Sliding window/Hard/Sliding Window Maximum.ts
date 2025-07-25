/**
 * LeetCode 239: Sliding Window Maximum
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/sliding-window-maximum/
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
    const res = [];
    const deque = [];
    for (let i = 0; i < nums.length; i++) {
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }
    return res;
}
