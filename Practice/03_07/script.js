/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  brand: "Hasee",
  name: "Albert-Hasee",
  system: "Windows 10 Pro",
  width: 10,
  length: 6,
  height: 2,
  lidOpen: false,
  volumn: 0,
  keyboard: {
    numOfKey: 56,
    hasNumberKeys: true,
  },

  openLid: function () {
    this.lidOpen = true;
    console.info("Lid opened");
  },
  closeLid: function () {
    this.lidOpen = false;
    console.info("Lid closed");
  },
  setVolumn(volumn) {
    this.volumn = volumn;
    console.info("Volumn is set to", this.volumn);
  },
};

console.log("Laptop:", laptop);
console.log("Laptop brand:", laptop.brand);
console.log("Laptop lid status:", laptop.lidOpen ? "open" : "close");
laptop.openLid();
console.log("Laptop lid status:", laptop.lidOpen ? "open" : "close");
laptop.closeLid();
console.log("Laptop volumn:", laptop.volumn);
laptop.setVolumn(100);
console.log("Laptop volumn:", laptop.volumn);
var query = "system";
console.log("Laptop[", query, "] =", laptop[query]);
