// Modify the make_shirt() function so that shirts are large by default, with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
// size with a different message

function make_shirt(size: string = "large", message: string) {
    if (size === "large") {
        console.log("The size of the shirt is ".concat(size, " and  ").concat(message, "."));
    }
    else {
        console.log("The size of the shirt is ".concat(size, " and I will Not wear it and").concat(message, "."));
    }
}
make_shirt("large", "I love Typescript");
make_shirt("medium", "I love Typescript");
make_shirt("small", "I love Typescript");