let tinderUser=new Object()// singolton object 
tinderUser.id="123#3234%x"
tinderUser.name="Tejas"
tinderUser.location="Pune"
// console.log(tinderUser);
let userData={
    firm:'google',
    userName:{
        fullName:{
            firstName:"Tejas",
            lastName:"ghondage" 
        }
    }
}

console.log(userData.userName.fullName);

// object combination 
let obj1={1:"Tejas",2:"Trupti",3:"Prapti"}
let obj2={4:"Rasgulla",5:"Capachinno",6:"American Desert"}
// let obj3={obj1,obj2};
// console.log(obj3);
// let objx= Object.assign({},obj1,obj2);
// console.log(objx);

// let objct={...obj1,...obj2};
// console.log(objct);

let object=[
    {
        id:"123#@#",
    userName:"_tejas_"
    },
    {
        id:"323#@#",
    userName:"_teje32$_"
    },
    {
        id:"123#@2",
    userName:"_tea_"
    }
]

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("id")); 