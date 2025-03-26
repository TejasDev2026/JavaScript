let  score  = 1000;
console.log(`match score is : ${score}`);

let accountBalance=new Number(1000000);
console.log(`your account balance is ${accountBalance}`);

console.log(`converting integer to strring : ${accountBalance.toString().length}`);

let gstAmount=123.9345;
console.log(`fixing decimal number of fracrional number:${gstAmount.toFixed(2)}`);

console.log(`get prcision value of an factional number : ${gstAmount.toPrecision(4)}`);

console.log(`converting integer representation to country repsresentation : ${accountBalance.toLocaleString('en-IN')}`);
console.log("+++++++++++++++++++++++++++++++++++++++++++MATHEMATICS IN JAVASCRIPT++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(`math keywordin javascript ${Math}`);
 console.log(`printind absolute  value of number of given number: ${Math.abs(-232)}`);
 console.log(`round off decimal number values : ${Math.round(2345.6)}`);
 console.log(` taking ceil of integer : ${Math.ceil(4.3)}`);
 console.log(` taking floor of integer : ${Math.floor(4.3)}`);
 console.log(`printing minimum of between given elelemets : ${Math.min(1,2,3,4,9)}`);
 console.log(`printing maximum of between given elelemets : ${Math.max(1,2,3,4,9)}`);

 console.log(`exploring random fucntion : ${Math.random()}`);
 console.log(`random function to print values between 1 to 10 : ${(Math.random()*10)+1}`)
 console.log(`convertig them to decimal from : ${Math.floor((Math.random()*10))+1}`)

//  generalize fromula for printing  an random value between min and max : Math.floor(Math.random()*(max-min+1))+(min) 

let min =10;
let max= 20;
console.log(`generalize froamula to print vlaues between given constraint : ${Math.floor(Math.random()*(max-min+1))+(min)}`);
 
 
 
 