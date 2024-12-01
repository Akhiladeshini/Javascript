let a=0
let b = 1 
let c
let num=15
console.log(a)
console.log(b)
function fib(num){
for(let i=2;i<num;i++){
  c=a+b;
  console.log(c)
  a=b;
  b=c;
}
}
fib(15)
