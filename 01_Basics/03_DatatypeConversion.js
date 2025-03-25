// to number

// let bodyInput=undefined;
// let bodyInput=null;
// let bodyInput=true;
// let bodyInput="Tejas";
// let bodyInput="9356096457";
let bodyInput=9335609614;
// let phoneNumber=Number(bodyInput);
// console.table([typeof phoneNumber,phoneNumber]);
let phoneNumber=BigInt(bodyInput);
console.table([typeof phoneNumber,phoneNumber]);

let AccountHoldersName=String(bodyInput);
console.table([typeof AccountHoldersName,AccountHoldersName]);

let isUserLoggedIn=Boolean(bodyInput);
console.table([typeof isUserLoggedIn,isUserLoggedIn]);
