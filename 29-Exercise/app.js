// Make an array of your favorite fruits, and then write a series of independent if statements that
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement,
// such as You really like bananas!
var favoriteFruits = ["apple", "banana", "orange"];
for (var _i = 0, _a = ["apple", "banana", "orange", "mango", "pineapple", "grapes"]; _i < _a.length; _i++) {
    var fruit = _a[_i];
    if (favoriteFruits.indexOf(fruit) !== -1) {
        console.log("You really like ".concat(fruit, "."));
    }
}
