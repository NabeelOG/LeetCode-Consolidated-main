/**
 * LeetCode 721: Accounts Merge
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/accounts-merge/
 */

function accountsMerge(accounts: string[][]): string[][] {
    class UnionFind {
        parent: number[]
        rank: number[]
        constructor(n: number) {
            this.parent = Array.from({length:n},(_,i)=>i)
            this.rank = Array(n).fill(1)
        }

        find(x: number): number {
            if (x !== this.parent[x]) {
                this.parent[x] = this.find(this.parent[x])
            }
            return this.parent[x]
        }

        union(x:number,y:number) {
            const px = this.find(x)
            const py = this.find(y)

            if(px===py) return false
            if(this.rank[px]>this.rank[py]) {
                this.parent[py] = px
                this.rank[px] = this.rank[px]+this.rank[py]
            } else {
                this.parent[px] = py
                this.rank[py] = this.rank[py]+this.rank[px]
            }
        }
    }

    const n = accounts.length
    const uf = new UnionFind(n)
    const emailToAcc = new Map<string,number>()

    //Union all acc that shares the same email id
    for(let i = 0;i<n;i++) {
        for(let j = 1;j<accounts[i].length;j++) {
            const email = accounts[i][j]
            if(emailToAcc.has(email)) {
                uf.union(i,emailToAcc.get(email)!)
            } else {
                emailToAcc.set(email,i)
            }
        }
    }

    //Group email by their leader account
    const accToEmail = new Map<number,Set<string>>();
    for(const [email,accId] of emailToAcc.entries()) {
        const leader = uf.find(accId)
        if(!accToEmail.has(leader)) {
            accToEmail.set(leader,new Set())
        }
        accToEmail.get(leader)!.add(email)
    }

    const res:string[][] = []
    for(const [accId,emailSet] of accToEmail.entries()) {
        const name = accounts[accId][0]
        const emails = Array.from(emailSet).sort()
        res.push([name,...emails])
    }
    return res
};