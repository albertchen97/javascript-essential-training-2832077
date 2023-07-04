/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection.length);
console.log(collection[1]);
collection[2] = "camera";
console.log(collection[2]);
collection[collection.length] = "new item";
collection[9] = "at the end";
console.log(collection);
