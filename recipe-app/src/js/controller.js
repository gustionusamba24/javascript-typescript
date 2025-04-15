const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const result = await fetch(
      "https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8906"
    );
    const data = await result.json();

    if (!result.ok) throw new Error(`${data.message}: ${result.status}`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      imageUrl: recipe.image_url,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
    };
    console.log(recipe);
  } catch (error) {
    alert(error);
  }
};

showRecipe();
