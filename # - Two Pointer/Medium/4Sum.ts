/**
 * LeetCode 18: 4Sum
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/4sum/
 */

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a,b)=>a-b)
    const res = []
    const n = nums.length

    for(let i = 0;i<nums.length;i++) {
        if(i>0&&nums[i]===nums[i-1]) continue
        
        for(let j = i+1;j<nums.length;j++) {
            if(j>i+1&&nums[j]===nums[j-1]) continue

            let left = j+1,right = n-1
            while(left<right) {
                const sum = nums[i]+nums[j]+nums[left]+nums[right]
                if(sum===target) {
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    left++
                    right--
                    while(left<right && nums[left]===nums[left-1]) left++
                    while(left<right && nums[right]===nums[right+1]) right--
                } else if(sum<target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return res
};