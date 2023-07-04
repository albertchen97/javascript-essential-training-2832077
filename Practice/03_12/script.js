/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Tablet from "./Tablet.js";
import Backpack from "./Backpack.js";
import Book from "./Book.js";

const tablet = new Tablet("Surface Pro 4", 10, 6, 100, true);
const backpack = new Backpack("new backpack");
const book1 = new Book("book1", "author1", 2001, 10);
const book2 = new Book("book2", "author2", 2022, 20);

// console.log("brand:", tablet.brand);
// tablet.setBrand(5);
// console.log("brand:", tablet.brand);

// console.log("backpack name:", backpack.name);
