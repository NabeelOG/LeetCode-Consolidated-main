const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim();
const lines = input.split("\n");

let countValid = 0;

lines.forEach((line) => {
    const nums = line.trim().split(/\s+/).map(Number);
    if (nums.length < 2) return; // skip lines with less than 2 numbers

    let increasing = nums[1] - nums[0] > 0;

    let isValid = true;

    let diffarray = []

    for (let i = 0; i < nums.length - 1; i++) {
        let diff = nums[i + 1] - nums[i];
        diffarray.push(diff)
        let absDiff = Math.abs(diff);

        if (absDiff < 1 || absDiff > 3) {
            isValid = false;
            break;
        }

        if (increasing && nums[i + 1] <= nums[i]) {
            isValid = false;
            break;
        }

        if (!increasing && nums[i + 1] >= nums[i]) {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        countValid++; // only increment here if the line is valid
    }
});

console.log(countValid);