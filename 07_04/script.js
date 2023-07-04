/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let items = [
  "laptop",
  "monitor",
  "tablet",
  "lamp",
  3.14,
  true,
  "notebook",
  "last item",
];
console.log("tableItems:", items);

// const lastItem = items.pop();
items.pop();
console.log("Removed the last item:", items);

items.unshift(items.pop());
console.log("Added the last item as the first item on the array:", items);

items.sort();
console.log("Sorted the items by alphabetical order:", items);

// Find the first non-string item in the array
const nonStringItem = items.find(function (item) {
  if (typeof item != String) {
    return item;
  }
});
console.log("The first non-string item is", nonStringItem);

// Remove the first non-string item (shift forward the subarray from that item to the end)
// for (let i = items.indexOf(nonStringItem); i < items.length - 1; i++) {
//   items[i] = items[i + 1];
// }
// items.pop();
// console.log("The first non-string item is removed:", items);
items.splice(items.indexOf(nonStringItem), 1);
console.log(`${nonStringItem} is been removed:`, items);
