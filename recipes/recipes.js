// Wait for DOM to load
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
      recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderRecipes(filtered);
  });

  // Optional: Prevent form submission from reloading the page
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
          <div class="tag">${recipe.tags.join(", ")}</div>
          <h2>${recipe.name}</h2>
          <div class="rating">${"⭐".repeat(Math.round(recipe.rating))}</div>
          <p class="description">${recipe.description}</p>
        </div>
      `;
      main.appendChild(card);
    });
  }
});
