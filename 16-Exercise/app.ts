// You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list


var names = ["Abdulrahman", "Ahmed", "Ali"];
names[2] = "Hassan";
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + ", I would like to invite you to dinner.");
}
console.log("Hello  I found a bigger table.");
names.unshift("naveed");
names.splice(2, 0, "waseem");
names.push("kamran");
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + ", I would like to invite you to dinner.");
}
