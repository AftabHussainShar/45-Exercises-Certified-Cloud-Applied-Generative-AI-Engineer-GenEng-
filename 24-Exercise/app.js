// You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
// Tests for equality and inequality with strings
var str1 = "hello";
var str2 = "hello";
console.log("Is str1 == str2? I predict True.");
console.log(str1 == str2);
var str3 = "hello";
var str4 = "world";
console.log("Is str3 == str4? I predict False.");
console.log(str3 == str4);
// Tests using the lower case function
var str5 = "hello";
var str6 = "HELLO";
console.log("Is str5 == str6? I predict True.");
// make both lowercase 
str5 = str5.toLowerCase();
str6 = str6.toLowerCase();
console.log(str5 == str6);
console.log("Is str5 == str5? I predict True.");
console.log(str5 == str5);
console.log("Is str6 == str6? I predict True.");
console.log(str6 == str6);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// // to, and less than or equal to
var number = 5;
var number2 = 5;
console.log("Is number == number2? I predict True.");
console.log(number == number2);
var number3 = 5;
var number4 = 6;
console.log("Is number3 == number4? I predict False.");
console.log(number3 == number4);
var number5 = 5;
var number6 = 6;
console.log("Is number5 > number6? I predict False.");
console.log(number5 > number6);
var number7 = 5;
var number8 = 6;
console.log("Is number7 < number8? I predict True.");
console.log(number7 < number8);
// Tests using "and" and "or" operators
// and or use 
var number9 = 5;
var number10 = 6;
console.log("Is number9 == 5 and number10 == 6? I predict True.");
console.log(number9 == 5 && number10 == 6);
var number11 = 5;
var number12 = 6;
console.log("Is number11 == 5 or number12 == 6? I predict True.");
console.log(number11 == 5 || number12 == 6);
// Test whether an item is in an array
var numbers = [1, 2, 3, 4, 5];
var number13 = 3;
console.log("Is number13 in numbers? I predict True.");
console.log(number13 in numbers);
// Test whether an item is not in an array
console.log("Is number13 not in numbers? I predict False.");
console.log(!(number13 in numbers));
