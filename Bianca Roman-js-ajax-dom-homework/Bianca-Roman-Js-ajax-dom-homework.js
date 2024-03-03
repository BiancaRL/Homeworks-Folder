function searchByIngredient(ingredient) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    )
      .then((response) => response.json())
      .then((data) => data.meals || [])
      .catch((error) => {
        console.error("Error fetching recipes by ingredient:", error);
        return [];
      });
  }
  
  function getRecipeDetailsById(id) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => data.meals && data.meals[0])
      .catch((error) => {
        console.error("Error fetching recipe details by ID:", error);
        return null;
      });
  }
  
  function displayRecipeDetails(id, ingredient) {
    return getRecipeDetailsById(id)
      .then((recipeDetails) => {
        if (recipeDetails) {
          const overlay = document.getElementById("overlay");
          const recipeDetailsContainer = document.getElementById("recipeDetails");
          recipeDetailsContainer.innerHTML = `
              <span class="close" onclick="closeOverlay()">X</span>
              <h3>${recipeDetails.strMeal}</h3>
              <p><span class="ingredient-name">${ingredient}</span></p>
              <p><strong>Instructions:</strong></p>
              <p>${recipeDetails.strInstructions}</p>
              <img src="${recipeDetails.strMealThumb}" alt="${recipeDetails.strMeal}">
              <p><strong><a href="${recipeDetails.strYoutube}" target="_blank">Watch Video</a></strong></p>
            `;
  
          recipeDetailsContainer.style.overflowY = "auto";
  
          overlay.style.display = "flex";
        } else {
          alert("Recipe details not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
        alert("An error occurred while fetching recipe details.");
      });
  }
  
  function searchRecipes() {
    const ingredientInput = document.getElementById("ingredientInput");
    const ingredient = ingredientInput.value.trim();
  
    if (ingredient === "") {
      errorMessage.textContent = "Please enter an ingredient";
      return Promise.resolve();
    } else {
      errorMessage.textContent = "";
    }
  
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
  
    return searchByIngredient(ingredient)
      .then((meals) => {
        if (meals.length === 0) {
          recipeList.innerHTML = "No recipes found for this ingredient.";
          return;
        }
  
        for (const meal of meals) {
          getRecipeDetailsById(meal.idMeal)
            .then((recipeDetails) => {
              const recipeName = recipeDetails.strMeal;
              const recipeThumbnail = recipeDetails.strMealThumb;
  
              const recipeElement = document.createElement("div");
              recipeElement.classList.add("recipe");
              recipeElement.innerHTML = `
                  <img src="${recipeThumbnail}" alt="${recipeName}">
                  <h3>${recipeName}</h3>
                `;
  
              const getRecipeButton = document.createElement("button");
              getRecipeButton.textContent = "Get Recipe";
              getRecipeButton.classList.add("bold-text");
              getRecipeButton.addEventListener("click", () => {
                displayRecipeDetails(meal.idMeal, ingredient);
              });
  
              recipeElement.appendChild(getRecipeButton);
              recipeList.appendChild(recipeElement);
            })
            .catch((error) => {
              console.error("Error fetching recipes:", error);
              recipeList.innerHTML = "An error occurred while fetching recipes.";
            });
        }
      })
      .catch((error) => {
        console.error("Error searching recipes:", error);
        recipeList.innerHTML = "An error occurred while fetching recipes.";
      });
  }
  
  function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  
  const ingredientInput = document.getElementById("ingredientInput");
  ingredientInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchRecipes();
    }
  });
  