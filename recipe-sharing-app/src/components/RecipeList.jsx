import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Recipe Collection</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add your first recipe above!</p>
      ) : (
        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0" }}>{recipe.title}</h3>
              <p style={{ margin: "0 0 15px 0", color: "#666" }}>
                {recipe.description.length > 150
                  ? `${recipe.description.substring(0, 150)}...`
                  : recipe.description}
              </p>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
