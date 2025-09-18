import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const handleToggleFavorite = () => {
    if (favorites.includes(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  if (!recipe) {
    return (
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/")}>Back to Recipes</button>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ← Back to Recipes
      </button>

      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "15px",
          }}
        >
          <h1 style={{ margin: 0 }}>{recipe.title}</h1>
          <button
            onClick={handleToggleFavorite}
            style={{
              background: "none",
              border: "2px solid #e0e0e0",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isFavorite ? "#fff5f5" : "#fff",
              borderColor: isFavorite ? "#dc3545" : "#e0e0e0",
            }}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
          {recipe.description}
        </p>
        {isFavorite && (
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            ⭐ This is one of your favorites!
          </div>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Edit Recipe</h3>
        <EditRecipeForm recipe={recipe} />
      </div>

      <div>
        <h3>Delete Recipe</h3>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
