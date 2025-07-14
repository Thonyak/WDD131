const recipes = [
  {
    name: "Apple Crisp",
    description: "A warm dessert made with baked apples and a cinnamon-oat topping.",
    image: "images/apple-crisp.jpeg",
    tags: ["dessert", "fruit", "easy"]
  },
  {
    name: "Black Beans and Rice",
    description: "A hearty and healthy combo of black beans and seasoned rice.",
    image: "images/black-beans-and-rice.jpg",
    tags: ["dinner", "vegan", "quick"]
  },
  {
    name: "Chicken Curry",
    description: "Spicy and flavorful chicken cooked in a creamy curry sauce.",
    image: "images/chicken-curry.webp",
    tags: ["dinner", "spicy", "Indian"]
  },
  {
    name: "Chocolate Chip Cookies",
    description: "Crispy edges and soft centers make these a classic treat.",
    image: "images/chocolate-chip-cookies.jpg",
    tags: ["dessert", "baking", "sweet"]
  },
  {
    name: "Escalopes de Poulet à la Crème",
    description: "French-style chicken cutlets in a rich cream sauce.",
    image: "images/escalopes-de-poulet-a-la-creme.webp",
    tags: ["dinner", "French", "creamy"]
  },
  {
    name: "German Gooseberry Cake",
    description: "A traditional German cake topped with tart gooseberries.",
    image: "images/german-gooseberry-cake.jpg",
    tags: ["dessert", "German", "fruit"]
  },


  {
    name: "Kisra and combo",
    description: "Classic Sudan/south Sudan paper-like flatbread made with fermented wheat flour.",
    image: "images/Kisra-kombo.jpeg",
    tags: ["dinner", "sudanese", "tasty"]
  },
  {
    name: "Molokhia",
    description: "Molokhia Molokhia is a meal made of Molokhia leaves cooked in a meat based soup. The scientific name of the plant is Corchorus Olitorus, also known as Jews mallow, or tossa Jute pant..",
    image: "images/molokhia.jpg",
    tags: ["dinner", "delicious", "easy"]
  },
  {
    name: "mula lham",
    description: "This is a delicous dish made with fresh Okra and meat.",
    image: "images/mula lham.jpeg",
    tags: ["dinner", "savory", "sudanese"]
  },
  {
    name: "Nyama choma",
    description: "roast meat over grill.",
    image: "images/Nyama Choma.jpg",
    tags: ["dinner/lunch", "meat", "beef/goat meat"]
  }




];

// Render recipes
function renderRecipes(recipeList) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  recipeList.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
    `;

    container.appendChild(card);
  });
}

// Search handler (optional, if you add input interaction)
document.getElementById("searchInput")?.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );
  renderRecipes(filtered);
});

// Random recipe handler
document.getElementById("randomBtn")?.addEventListener("click", () => {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  renderRecipes([random]);
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  renderRecipes(recipes);
});
