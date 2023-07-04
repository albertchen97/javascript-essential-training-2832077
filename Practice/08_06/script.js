/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

class Webpage {
  constructor(heading, paragraph) {
    this.heading = heading;
    this.paragraph = paragraph;
  }
}

// Function Declaration
function hello() {
  console.log("Hello");
}

// Function Expression
const world = function () {
  console.log("World!");
};

hello();
world();

const displayArticle = () => {
  const webpage = new Webpage("My Heading", "My Paragraph");
  const main = document.querySelector("main");

  const heading = document.createElement("h1");
  const headingContent = `${webpage.heading}`;
  heading.innerHTML = headingContent;
  main.append(heading);

  const paragraph = document.createElement("p");
  const paragraphContent = `${webpage.paragraph}`;
  paragraph.innerHTML = paragraphContent;
  main.append(paragraph);
};

const button = document.querySelector("button");
button.setAttribute("onclick", "displayArticle()");
