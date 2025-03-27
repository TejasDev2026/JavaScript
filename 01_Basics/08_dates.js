let myDate=new Date();
console.log(`new date function returns current date and time : ${myDate}`);
console.log(`new date function returns current date and time : ${myDate.toUTCString()}`);
console.log(`new date function returns current date and time : ${myDate.toTimeString()}`);
console.log(`new date function returns current date and time : ${myDate.toString()}`);
console.log(`new date function returns current date and time : ${myDate.toLocaleTimeString()}`);
console.log(`new date function returns current date and time : ${myDate.toLocaleString()}`);
console.log(`new date function returns current date and time : ${myDate.toJSON()}`);
console.log(`new date function returns current date and time : ${myDate.toISOString()}`);
// let myCreatedDate= new Date(2004,1,1);
let myCreatedDate= new Date("12/05/2023");
console.log(myCreatedDate.toLocaleString());
let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());

let exploreLocaleString=new Date();
console.log(exploreLocaleString.toLocaleString('Default',{
    month:"2-digit"
}));

