import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Trigger filtering whenever searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default SearchBar;
