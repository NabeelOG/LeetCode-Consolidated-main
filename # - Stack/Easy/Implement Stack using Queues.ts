/**
 * LeetCode 225: Implement Stack using Queues
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/implement-stack-using-queues/
 */

class MyStack {
    private q1:number[]=[]
    private q2:number[]=[]
    constructor() {
        
    }

    push(x: number): void {
        this.q1.push(x)
        while(this.q2.length) {
            this.q1.push(this.q2.shift()!)
        }
        [this.q2,this.q1] = [this.q1,this.q2]
    }

    pop(): number {
        return this.q2.shift()
    }

    top(): number {
        return this.q2[0]
    }

    empty(): boolean {
        return this.q2.length===0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */