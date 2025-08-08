/**
 * LeetCode 853: Car Fleet
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/car-fleet/
 */

function carFleet(target: number, position: number[], speed: number[]): number {
    let cars:[number,number][]=position.map((pos,i)=>[pos,speed[i]])
    cars.sort((a,b)=>b[0]-a[0])
    // console.log(cars)
    let stack:number[]=[]

    for(let [pos,spd] of cars) {
        let time = (target-pos)/spd
        if(stack.length===0 || time>stack[stack.length-1]) {
            stack.push(time)
        }
    }
    return stack.length
};