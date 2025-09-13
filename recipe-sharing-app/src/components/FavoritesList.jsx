import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Get favorite recipes by mapping favorite IDs to actual recipe objects
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // Remove any undefined entries

  const handleRemoveFavorite = (recipeId) => {
    removeFavorite(recipeId);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>
        ❤️ My Favorites ({favoriteRecipes.length})
      </h2>

      {favoriteRecipes.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            color: "#666",
          }}
        >
          <p>No favorite recipes yet!</p>
          <p>
            Start adding recipes to your favorites by clicking the heart icon.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>
                  {recipe.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    color: "#666",
                    fontSize: "14px",
                  }}
                >
                  {recipe.description.length > 100
                    ? `${recipe.description.substring(0, 100)}...`
                    : recipe.description}
                </p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  View Recipe →
                </Link>
              </div>

              <button
                onClick={() => handleRemoveFavorite(recipe.id)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  padding: "5px",
                  color: "#dc3545",
                  marginLeft: "15px",
                }}
                title="Remove from favorites"
              >
                💔
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
