// run below progrm on console for better understanding 
const marathi_heros=["lakshimikant","ashok","nana","siddhrath"];
const hindi_heros=["salman","sharukh","rithik","tiger"];
// console.log(`let's push hindi_heros into marathi_heros and result is : ${marathi_heros.push(hindi_heros)}`);
// console.log(`printing marathi heros after push operatrion : ${marathi_heros}`)

console.log(`another one way to add elelemt of an array to another array is concatination , here is result of concatioination : ${marathi_heros.concat(hindi_heros)}`); // it will not add elements to first array it just return an another array with all elelemts with in array one and two
 
// one of the important operation in aaray is spread operartion  

let all_new_heros=[...marathi_heros,...hindi_heros];
console.log(`printing new aaray after spread opearion : ${all_new_heros}`);
// this is most useful array concatination maethod 

let neateda_array=[1,2,3,4,[6,7,8,9],[,7,6,54,34,2],2,4,2,3[23,2]];
console.log(`for generalization of  this aarsy we use flat function : ${neateda_array.flat(Infinity)}`);

console.log(Array.isArray("Tejas"));
// converting it to an array 
console.log(Array.from("Tejas"));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));


