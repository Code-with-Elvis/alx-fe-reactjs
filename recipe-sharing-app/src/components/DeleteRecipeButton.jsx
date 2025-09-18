import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this recipe? This action cannot be undone."
      )
    ) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: "10px 15px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
