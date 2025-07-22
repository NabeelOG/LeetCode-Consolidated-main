/**
 * LeetCode 953: Verifying an Alien Dictionary
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/verifying-an-alien-dictionary/
 */

function isAlienSorted(words: string[], order: string): boolean {
    let orderIndex = new Array(26).fill(0)
    for(let i = 0;i<order.length;i++) {
        orderIndex[order.charCodeAt(i)-97] = i
    }

    for(let i=0;i<words.length-1;i++) {
        let w1 = words[i],w2 = words[i+1]
        for(let j = 0;j<w1.length;j++) {
            if(j===w2.length) return false
            if(w1[j]!==w2[j]) {
                if(orderIndex[w1.charCodeAt(j)-97]>orderIndex[w2.charCodeAt(j)-97]) {
                    return false
                }
                break
            }
        }
    }
    return true
};