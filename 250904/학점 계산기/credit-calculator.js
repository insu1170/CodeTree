const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);



let sum = 0
arr.forEach((data)=>{
sum+=data
})

sum = sum/arr.length
console.log(sum.toFixed(1));

if(sum>=4)console.log('Perfect')
else if(sum>=3) console.log('Good')
else console.log('Poor')