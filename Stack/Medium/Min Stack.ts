/**
 * LeetCode 155: Min Stack
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/min-stack/
 */

class MinStack {
    private stack:number[] = []
    private minstack:number[] = []
    constructor() {
    }

    push(val: number): void {
        this.stack.push(val)
        if(this.minstack.length===0) {
            this.minstack.push(val)
        } else {
            this.minstack.push(Math.min(val,this.minstack[this.minstack.length-1]))
        }
    }

    pop(): void {
        if(this.stack.length>0) {
            this.stack.pop()
            this.minstack.pop()
        }
    }

    top(): number {
        return this.stack.length>0?this.stack[this.stack.length-1]:undefined;
    }

    getMin(): number {
        return this.minstack.length>0? this.minstack[this.minstack.length-1]:undefined;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */