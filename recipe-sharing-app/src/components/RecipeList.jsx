import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Display filtered recipes if there's a search term, otherwise show all recipes
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  const handleToggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Recipe Collection</h2>
      {searchTerm && (
        <p style={{ color: "#666", fontStyle: "italic" }}>
          {filteredRecipes.length} recipe(s) found for "{searchTerm}"
        </p>
      )}
      {displayedRecipes.length === 0 ? (
        <p>
          {searchTerm
            ? "No recipes found matching your search."
            : "No recipes available. Add your first recipe above!"}
        </p>
      ) : (
        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          {displayedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 10px 0" }}>{recipe.title}</h3>
                  <p style={{ margin: "0 0 15px 0", color: "#666" }}>
                    {recipe.description.length > 150
                      ? `${recipe.description.substring(0, 150)}...`
                      : recipe.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      to={`/recipe/${recipe.id}`}
                      style={{
                        display: "inline-block",
                        padding: "8px 16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "5px",
                        fontSize: "14px",
                      }}
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleToggleFavorite(recipe.id)}
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        padding: "5px",
                      }}
                      title={
                        favorites.includes(recipe.id)
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      {favorites.includes(recipe.id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
