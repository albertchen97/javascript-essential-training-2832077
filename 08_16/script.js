/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

const main = document.querySelector(".maincontent");

// Loop through backpackObjectArray to create an article with the class "backpack".
const backpacks = backpackObjectArray.map((backpackObject) => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  // Give teh article the ID of the current backpack object.
  newArticle.setAttribute("id", backpackObject.id);
  // Set the inner HTML of the article to the existing HTML output provided in const content.
  const content = `
    <figure class="backpack__image">
      <img src=${backpackObject.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpackObject.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpackObject.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpackObject.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpackObject.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpackObject.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpackObject.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpackObject.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpackObject.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;
  newArticle.innerHTML = content;
  return newArticle;
});
backpacks.forEach((backpack) => {
  main.append(backpack);
});

function anotherFunction() {
  return "This is a decalred function.";
}

const myFunction = function () {
  return "This is not an arrow function.";
};

const myCallback = () => {
  return "No arguments";
};

const myCallback1 = (a) => {
  return `This is my ${a} callback function.`;
};
const myCallback2 = (a, b) => {
  return `${b}, this is my ${a} callback function.`;
};

const someFunction = (callback) => {
  console.log(callback);
};

someFunction(anotherFunction());
someFunction(myFunction());
someFunction(myCallback());
someFunction(myCallback1("first"));
someFunction(myCallback2("second", "Hello"));
