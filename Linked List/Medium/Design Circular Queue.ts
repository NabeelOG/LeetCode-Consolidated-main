/**
 * LeetCode 622: Design Circular Queue
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/design-circular-queue/
 */

class MyCircularQueue {
    private space:number
    private left:ListNode
    private right:ListNode
    constructor(k: number) {
        this.space=k
        this.left = new ListNode(0)
        this.right = this.left
    }

    enQueue(value: number): boolean {
        if(this.isFull()) return false
        const cur = new ListNode(value)
        if(this.isEmpty()) {
            this.left.next = cur
            this.right = cur
        } else {
            this.right.next = cur
            this.right = cur
        }
        this.space--
        return true
    }

    deQueue(): boolean {
        if(this.isEmpty()) return false

        this.left.next = this.left.next.next
        if(!this.left.next) {
            this.right = this.left
        }
        this.space++
        return true
    }

    Front(): number {
        return this.isEmpty()?-1:this.left.next.val
    }

    Rear(): number {
        return this.isEmpty()?-1:this.right.val
    }

    isEmpty(): boolean {
        return this.left.next===null
    }

    isFull(): boolean {
        return this.space===0
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */