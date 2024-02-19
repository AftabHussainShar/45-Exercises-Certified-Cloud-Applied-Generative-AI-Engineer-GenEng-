// You just found out that your new dinner table won’t arrive in time for the dinner, and you have
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program.
var names = ["Abdulrahman", "Ahmed", "Ali"];
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
console.log("Hello I invite only two people for dinner.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.
for (var i = 0; i < names.length; i++) {
    if (i > 2) {
        break;
    }
    console.log("Sorry " + names.pop() + ", I can't invite you to dinner.");
}
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + ", you are still invited.");
}
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program.
names.pop();
names.pop();
names.pop();
console.log(names);
