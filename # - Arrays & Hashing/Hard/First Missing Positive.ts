/**
 * LeetCode 41: First Missing Positive
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/first-missing-positive/
 */

function firstMissingPositive(nums: number[]): number {
    let i = 0

    //cyclic sort starts here
    while(i<nums.length) {
        let correctIndex = nums[i]-1
        //first we initialize correctIndex as nums[i]-1, ie the number 2 has to go the 1st position in array ( that will be where 2 in a sorted array)
        //this is to find the positive missing item, so we van ignore the negative values. 
        if(nums[i]>0&&nums[i]<=nums.length&&nums[i]!==nums[correctIndex]) {
            //swapping numbers to the correct positions.
            [nums[i],nums[correctIndex]] = [nums[correctIndex],nums[i]]
        } else {
            i++
        }
    }

    //looking for the first number out of place. after sorting if any of the number is out of place ie if a number at 5 isnt 5+1 ie 6 we can return 6
    //because 6 is the missing positive 
    for(let i = 0;i<nums.length;i++) {
        if(nums[i]!==i+1) {
            return i+1
        }
    }

    //if no number is out of place we can return the length+1.
    return nums.length+1
};