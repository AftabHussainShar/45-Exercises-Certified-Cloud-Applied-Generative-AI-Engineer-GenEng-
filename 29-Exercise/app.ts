// Make an array of your favorite fruits, and then write a series of independent if statements that
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement,
// such as You really like bananas!

let favoriteFruits: string[] = ["apple", "banana", "orange"];
for (let fruit of ["apple", "banana", "orange", "mango", "pineapple", "grapes"]) {
    if (favoriteFruits.indexOf(fruit) !== -1) {
        console.log(`You really like ${fruit}.`);
    }
}


