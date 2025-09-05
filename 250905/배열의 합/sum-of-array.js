const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");


input.forEach((a)=>{
    let sum = 0
    a.split(" ").forEach((data)=>{
        sum+=Number(data);
    })
    console.log(sum);
    sum=0

})