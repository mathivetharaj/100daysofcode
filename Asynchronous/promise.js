/*function add(a,b){
    setTimeout((a,b)=>{
        return a+b;
    }, 1000);
}*/


function add(a,b){
    setTimeout((a,b)=>{
        return a+b;
    }, 0);
}

let c=100;
let d=100;
console.log(c+d);

console.log(add(2,3));