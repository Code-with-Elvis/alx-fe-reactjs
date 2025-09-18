import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations when component mounts or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  const handleToggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>
        🎯 Recommended For You
      </h2>

      {recommendations.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            color: "#666",
          }}
        >
          <p>No recommendations available yet.</p>
          <p>
            Add some recipes and mark a few as favorites to get personalized
            recommendations!
          </p>
        </div>
      ) : (
        <>
          <p
            style={{ color: "#666", fontStyle: "italic", marginBottom: "20px" }}
          >
            Based on your favorites and preferences
          </p>
          <div style={{ display: "grid", gap: "15px" }}>
            {recommendations.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "8px",
                      }}
                    >
                      <h3 style={{ margin: 0, color: "#333" }}>
                        {recipe.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#28a745",
                          backgroundColor: "#d4edda",
                          padding: "2px 6px",
                          borderRadius: "3px",
                        }}
                      >
                        Recommended
                      </span>
                    </div>
                    <p
                      style={{
                        margin: "0 0 15px 0",
                        color: "#666",
                        fontSize: "14px",
                      }}
                    >
                      {recipe.description.length > 120
                        ? `${recipe.description.substring(0, 120)}...`
                        : recipe.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
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
                        View Recipe
                      </Link>
                      <button
                        onClick={() => handleToggleFavorite(recipe.id)}
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "18px",
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
        </>
      )}
    </div>
  );
};

export default RecommendationsList;
