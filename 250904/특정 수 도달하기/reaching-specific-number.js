const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ");

let result = 0
let index = 0
for (let a of arr ){
    if(a<250){
        result+=Number(a)
        index+=1
    }else{
        console.log(result,Math.round((result/index)*100)/100)
        break
    }

}