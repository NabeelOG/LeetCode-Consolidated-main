const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').trim();

const firstArray = [];
const secondArray = [];

const lines = input.split('\n')
lines.forEach((line)=>{
    const [first, second] = line.trim().split(/\s+/).map(Number);
    firstArray.push(first);
    secondArray.push(second);
})
let secondcount  = {}
for(let num of secondArray) {
    secondcount[num] = (secondcount[num]||0)+1
}
let similarityScore = 0
for(let item of firstArray) {
    similarityScore += item*(secondcount[item]||0)
}
console.log(similarityScore)