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

firstArray.sort((a,b)=>a-b)
secondArray.sort((a,b)=>a-b)

let sum = 0
for(let i =0;i<firstArray.length;i++) {
    sum += Math.abs(firstArray[i]-secondArray[i])
}

console.log(sum)