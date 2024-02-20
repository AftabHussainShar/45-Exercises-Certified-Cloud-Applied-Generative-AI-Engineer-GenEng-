// Write a function that accepts an array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it should
// print a summary of the sandwich that is being ordered. Call the function three times, using a different
// number of arguments each time.

function make_sandwich(...items: string[]) {
    console.log(`Your sandwich has ${items.length} items:`);
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}. ${items[i]}`);
    }
}

make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "lettuce");
make_sandwich("peanut butter", "jelly");