// singolton object 
const symkey = Symbol("key1");
let studentData={
    name: "Tejas",
    [symkey]:'loveyou',
    branch:"Computer",
    div:"A",
    Batch:"A3",
}
console.log(studentData.name);
console.log(studentData.branch);
console.log(studentData["div"]);
console.log(studentData[symkey]);
console.log(studentData);
Object.freeze(studentData.branch);
studentData.branch="pink";
console.log(studentData);

studentData.gretings =function(){
    console.log(`hello devloper ${this.name}`);
}
console.log(studentData.gretings());
