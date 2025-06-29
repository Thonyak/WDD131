// --- Recipes Array ---
const recipes = [
  {
    name: "Apple Crisp",
    description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
    tags: ["dessert", "fruit"],
    rating: 4,
    image: "./image/apple-crisp.jpeg"
  },
  {
    name: "Chicken Alfredo",
    description: "Creamy and comforting pasta made with grilled chicken and homemade Alfredo sauce.",
    tags: ["dinner", "pasta"],
    rating: 5,
    image: "./image/chicken-curry.webp"
  },
  {
    name: "Avocado Toast",
    description: "A quick and healthy breakfast made with mashed potatoes on toasted sourdough bread.",
    tags: ["breakfast", "healthy"],
    rating: 3,
    image: "./image/roasted-potatoes.webp"
  },
  {
    name: "Beef Tacos",
    description: "Spiced ground beef in crispy taco shells with lettuce, tomato, and cheese.",
    tags: ["dinner", "mexican"],
    rating: 4,
    image: "./image/escalopes-de-poulet-a-la-creme.webp"
  },
  {
    name: "Berry Smoothie",
    description: "A refreshing drink made with mixed berries, banana, and Greek yogurt.",
    tags: ["drink", "healthy"],
    rating: 5,
    image: "./image/german-gooseberry-cake.jpg"
  }
];

// --- Wait for DOM to load ---
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-form input");
  const searchForm = document.querySelector(".search-form");
  const main = document.querySelector("main");

  // Render all recipes initially
  renderRecipes(recipes);

  // Search event
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      (recipe.tags || []).some(tag => tag.toLowerCase().includes(query))
    );
    renderRecipes(filtered);
  });

  // Prevent form from reloading page
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Optional: Random recipe button logic
  const randomButton = document.querySelector("#random-btn");
  if (randomButton) {
    randomButton.addEventListener("click", () => {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      renderRecipes([randomRecipe]);
    });
  }

  // Render function
  function renderRecipes(recipesToRender) {
    main.innerHTML = ""; // clear previous
    if (recipesToRender.length === 0) {
      main.innerHTML = "<p>No recipes found.</p>";
      return;
    }

    recipesToRender.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-details">
          <div class="tag">${recipe.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <h2>${recipe.name}</h2>
          <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
            ${Array.from({ length: 5 }, (_, i) => i < recipe.rating ? "⭐" : "☆").join("")}
          </div>
          <p class="description">${recipe.description}</p>
        </div>
      `;
      main.appendChild(card);
    });
  }
});
