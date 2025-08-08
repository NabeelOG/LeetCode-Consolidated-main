const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").trim();

const lines = input.split("\n");

const subtitleLines = [];

for (let i = 0; i < lines.length; i += 3) {
    if (lines[i + 2] && lines[i + 2].trim().length > 0) {
        subtitleLines.push(lines[i + 2].trim());
    }
}

const combinedText = subtitleLines.join(" ");
console.log(combinedText);
