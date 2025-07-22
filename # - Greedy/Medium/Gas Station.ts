/**
 * LeetCode 134: Gas Station
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/gas-station/
 */


//Greedy
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const totalGas = gas.reduce((acc,val)=>acc+val,0)
    const totalCost = cost.reduce((acc,val)=>acc+val,0)

    if(totalGas<totalCost) return -1

    let total = 0
    let res = 0

    for(let i = 0;i<gas.length;i++) {
        total = total + (gas[i]-cost[i])
        if(total<0) {
            total = 0
            res = res + i
        }
    }
    return res
};


//Brute Force Approach
function canCompleteCircuit2(gas: number[], cost: number[]): number {
    const n = gas.length

    for(let i = 0;i<n;i++) {
        let tank = gas[i] - cost[i]
        if(tank<0) continue

        let j = (i+1)%n
        while(j!==i) {
            tank = tank + (gas[j]-cost[j])
            if(tank<0) break
            j = (j+1)%n
        }
        if(j===i) return i
    }
    return -1
};