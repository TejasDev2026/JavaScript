// Best practice to write JavaScript
let str1 = "Tejas";
let str2 = "Ghondage";
console.log(`My name is ${str1} and my surname is ${str2}..!`);

let movieName = "wife asique our ballor";

console.log(`Length of string: ${movieName.length}`);

// Let's explore functions provided by JS while running in the browser 

console.log(movieName.charAt(6)); 
// Returns the character at a particular index value

console.log(`Index of character 'a': ${movieName.indexOf('a')}`);
// Returns index of particular character

console.log(`Is string contains word 'wife': ${movieName.includes('wife')}`);
// Check whether a particular word is present in the string or not

let url = "https://www.google.com";

console.log(`Replaced first occurrence of '.': ${url.replace('.', '-')}`);
// Replaces first occurrence of a particular character with a given value in the string

console.log(`Replaced all occurrences of '.': ${url.replaceAll('.', '-')}`);
// Replaces all occurrences of a particular character with a given value in the string

let statement = "    tejas   ";

console.log(`Statement after trim is: ${statement.trim()}`);
// Trims all whitespace and terminating characters 

console.log(`Transforming string to upper case: ${statement.trim().toUpperCase()}`);
// Convert string to uppercase

console.log(`Transforming string to lower case: ${statement.trim().toLowerCase()}`);
// Convert string to lowercase

console.log(`Splitting string by '.': ${url.split('.')}`);
// Splits string into an array of substrings based on the delimiter

console.log(`Substring from index 0 to 6: ${statement.substring(0, 6)}`);
// Extracts substring from given start to end index

console.log(`Found at index: ${statement.search('tejas')}`);
// Searches for a given string in the main string

console.log(`Printing string 4 times: ${statement.repeat(4)}`);
// Repeats the string n times

console.log(`Character at index 5: ${statement.at(5)}`);
// Returns the character at the given index
