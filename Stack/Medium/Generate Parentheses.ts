/**
 * LeetCode 22: Generate Parentheses
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/generate-parentheses/
 */

function backtrack(openN: number, closeN: number, n: number, res: string[], stack: string): void {
    if (openN === closeN && openN === n) {
        res.push(stack)
        return
    }
    if (openN < n) {
        backtrack(openN + 1, closeN, n, res, stack + '(')
    }
    if (closeN < openN) {
        backtrack(openN, closeN + 1, n, res, stack + ')')
    }
}
function generateParenthesis(n: number): string[] {
    const res = []
    backtrack(0, 0, n, res, '')
    return res
};