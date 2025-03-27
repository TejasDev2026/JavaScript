let array=[1,2,3,4,5,6,7,8];
console.log(`array before inseting element at start by unshift:${array}`);
console.log(array.unshift(0))
console.log(`array after inserting at start by unshift:${array}`);
console.log(`taking slice of an array : ${array.slice(0,5)}`);
console.log(`${array.shift()}`);
console.log(`array after deletion of element at  start by shift:${array}`);

console.log(`${array.push(78)}`);
console.log(`array after push operation : ${array}`);

console.log(`${array.pop()}`);
console.log(`array after pop operation : ${array}`);
console.log(`${array.splice(0,5)}`);

console.log(`${array}`);
