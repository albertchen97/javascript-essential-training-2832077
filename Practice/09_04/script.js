/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");
const body = document.querySelector("body");

// Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
grid.addEventListener(
  "mouseover",
  () => {
    grid.classList.add("highlight");
  },
  false
);
grid.addEventListener(
  "mouseleave",
  () => {
    grid.classList.remove("highlight");
  },
  false
);

//  Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
cells.forEach((cell) => {
  cell.addEventListener(
    "mouseover",
    () => {
      cell.classList.add("highlight");
    },
    false
  );
});

cells.forEach((cell) => {
  cell.addEventListener(
    "mouseleave",
    () => {
      cell.classList.remove("highlight");
    },
    false
  );
});

//  Add an event listener to each grid cell to change its background color when it is clicked.
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("clicked");
  });
});

//  Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
body.addEventListener("keydown", (event) => {
  if (event.code == "KeyN") {
    // body.classList.add("dark-theme");
    body.classList.toggle("dark-theme");
  }
});
// body.addEventListener("keyup", (event) => {
//   if ((event.key == "n") | (event.code == "keyn")) {
//     body.classList.remove("dark-theme");
//   }
// });
