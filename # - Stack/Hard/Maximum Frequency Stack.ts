/**
 * LeetCode 895: Maximum Frequency Stack
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/maximum-frequency-stack/
 */

class FreqStack {
    private cnt:Map<number,number>
    private stack:Map<number,number[]>
    private maxCnt:number
    constructor() {
        this.cnt = new Map()
        this.stack = new Map()
        this.maxCnt = 0
    }

    push(val: number): void {
        const cntVal = (this.cnt.get(val)||0)+1
        this.cnt.set(val,cntVal)
        if(cntVal>this.maxCnt) {
            this.maxCnt = cntVal
            if(!this.stack.has(this.maxCnt)) {
                this.stack.set(this.maxCnt,[]) 
            }
        }
        this.stack.get(cntVal).push(val)
    }

    pop(): number {
        const res = this.stack.get(this.maxCnt).pop()
        this.cnt.set(res,this.cnt.get(res)-1)
        if(this.stack.get(this.maxCnt).length===0) {
            this.maxCnt--
        }
        return res
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */