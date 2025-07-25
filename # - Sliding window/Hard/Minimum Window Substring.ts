/**
 * LeetCode 76: Minimum Window Substring
 * Difficulty: Hard
 * URL: https://leetcode.com/problems/minimum-window-substring/description/
 */

function minWindow(s: string, t: string): string {
    if (t === "") return ""

    let countT = {}
    let window = {}
    for (let c of t) {
        countT[c] = (countT[c] || 0) + 1
    }
    let have = 0, need = Object.keys(countT).length
    let res = [-1, -1]
    let resLen = Infinity
    let l = 0

    for (let r = 0; r < s.length; r++) {
        let c = s[r]
        window[c]=(window[c]||0)+1

        if(countT[c] && window[c]===countT[c]) {
            have++
        }

        while(have===need) {
            if((r-l+1)<resLen) {
                resLen = r-l+1
                res=[l,r]
            }

            window[s[l]]--
            if(countT[s[l]] && window[s[l]] < countT[s[l]]) {
                have--
            }
            l++
        }
    }
    return resLen===Infinity?"":s.slice(res[0],res[1]+1)
};


// For each character 'c' in t:
//     countT[c] += 1

// Initialize window, have = 0, need = count of unique characters in t
// res = [-1, -1], resLen = Infinity, l = 0

// For r in 0 to s.length:
//     Add s[r] to window counts
//     If s[r] is in countT and window[s[r]] == countT[s[r]]:
//         have += 1

//     While have == need:
//         If (r - l + 1) < resLen:
//             Update resLen and res with [l, r]
//         Remove s[l] from window, move l++
//         If s[l] is in countT and window[s[l]] < countT[s[l]]:
//             have -= 1

// Return "" if resLen == Infinity else s.slice(res[0], res[1] + 1)