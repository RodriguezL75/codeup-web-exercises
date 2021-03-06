// (function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Joseph", "Jack", "Robert", "David"];

    console.log("There are " + names.length + " names in the names array.");

    for (var i = 0; i < names.length; i++) {
        console.log("The names at index " + " is " + names);
}

console.log(names.length);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//the loop below lists the names individually per line

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(
    function (name) {
        console.log(name)
    });


console.log("ForEach Loop");

names.forEach(function (element, index, array) {
    console.log("The names at index " + i + " is: " + names[i]);
})

console.log("ForEach Loop");

//Lists name at each index
names.forEach(function (element, index, array) {
    console.log("Name at index: " + index + " is " + element);
})

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

function first(arr) {
    return arr[0];

    }
function second(arr) {
    return arr[1];

}

function third(arr) {
    return arr[arr.length - 1];
}

console.log(first([1, 2, 3, 4, 5])); //return 1




// })();


