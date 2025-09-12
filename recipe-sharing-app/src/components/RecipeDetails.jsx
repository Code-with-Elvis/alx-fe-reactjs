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

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/")}>Back to Recipes</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ← Back to Recipes
      </button>

      <div style={{ marginBottom: "30px" }}>
        <h1>{recipe.title}</h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          {recipe.description}
        </p>
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
