// Write a function that stores information about a car in an Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
// arguments. Call the function with the required information and two other name-value pairs, such as
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly

function car(manufacturer, model, ...rest) {
    var car = {
        manufacturer: manufacturer,
        model: model,
    };

    for (var i = 0; i < rest.length; i += 2) {
        var key = rest[i];
        var value = rest[i + 1];
        car[key] = value;
    }

    return car;
}

console.log(car("Toyota", "Camry", "color", "blue", "feature", "sunroof"));
console.log(car("Ford", "Mustang", "color", "red", "feature", "convertible"));
console.log(car("Nissan", "Altima", "color", "silver", "feature", "sports package"));
