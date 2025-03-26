/*
There are total 7 premitive datatypes : String , Number , bigInt, Boolean, Null , Undefined , Symbol 
and three non-Premitive datatypes : Function , Object ,and arrays
let, explore them one by one:-->
*/

//string
let userinput="Tejas Ghondage"
let userName=String(userinput);
console.log([typeof userName , userName]);

//Number
let userPin=9356096145;
let accoutHoldersPin=String(userinput);
console.log([typeof accoutHoldersPin , accoutHoldersPin]);

//BigInt
let StystemIntpuNumber=132453897462575n;
let userNumber=String(StystemIntpuNumber);
console.log([typeof userNumber,userNumber]);

// boolean
let  systemLoginInput ="";
let isUserloggedIN=Boolean(systemLoginInput)
console.log([typeof isUserloggedIN , isUserloggedIN]);

// Null 
let curremntTemperature=null;
console.log(typeof curremntTemperature,curremntTemperature);
// undefined 
let maritalStatus;
console.log([typeof maritalStatus,maritalStatus]);
// symbol
let loveCode =123;
let codeLove=Symbol(loveCode);
console.log(typeof codeLove, codeLove);


// non premitive datatypes : function , array , objects
let Students=["tejas","rajesh","mahesh"];
console.table([typeof Students ,Students]);
let obj1={
    name:'tejas',
    rollNo: 'CS3148',
    PRN:'RBT22CS048'
}
console.table([typeof obj1 ,obj1]);

let printSum= function ()
{
    let sum=43+43;
    return sum;
}
console.log(typeof printSum, printSum());

// heap and stack allocation in javascript: primitive  datatypes uses stack allocation while non premitive datatypes like function and ibject uses an heap allocation lets explore it one by one

let accoutHoldersAdderss="Eden garden Society tathawade";
let primaryAddress=accoutHoldersAdderss;
primaryAddress="Vrindavan nivas kolgaon Ahilyanagar";
console.table([accoutHoldersAdderss , primaryAddress]);
//it uses a stack allocation 

let employeeData={
    name: "Tejas",
    department: "Computer",
    position: "Asst. prof",
    salary: 500000
}
console.table([employeeData.name,typeof employeeData])
let ComputerEmployeeData=employeeData;
ComputerEmployeeData.salary=10000000;
console.table([employeeData.salary,ComputerEmployeeData.salary])
