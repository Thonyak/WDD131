// Step 1: Add a paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Step 2: Add an image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random placeholder image");
document.body.appendChild(newImage);

// Step 3: Add a list
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4: Add a section with heading and paragraph
const newSection = document.createElement("section");

const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";
newSection.appendChild(newHeading);

const newPara = document.createElement("p");
newPara.innerText = "This was added through Javascript";
newSection.appendChild(newPara);

document.body.appendChild(newSection);
