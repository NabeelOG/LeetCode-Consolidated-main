/**
 * LeetCode 71: Simplify Path
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/simplify-path/
 */

function simplifyPath(path: string): string {
    const stack = []
    const paths = path.split('/')

    for(const cur of paths) {
        if(cur==="..") {
            if(stack.length) {
                stack.pop()
            }
        } else if(cur!=='' && cur!==".") {
            stack.push(cur)
        }
    }
    return "/"+stack.join("/")
};