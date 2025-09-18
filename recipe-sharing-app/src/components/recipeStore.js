import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  // Favorites functionality
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  // Recommendations functionality based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Enhanced recommendation logic based on favorites
      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );

      if (favoriteRecipes.length === 0) {
        // If no favorites, recommend random popular recipes
        const recommended = state.recipes
          .filter((recipe) => !state.favorites.includes(recipe.id))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        return { recommendations: recommended };
      }

      // Find recipes similar to favorites (mock similarity based on keywords)
      const favoriteKeywords = favoriteRecipes
        .flatMap((recipe) => recipe.title.toLowerCase().split(" "))
        .filter((word) => word.length > 3);

      const recommended = state.recipes
        .filter((recipe) => !state.favorites.includes(recipe.id))
        .filter((recipe) => {
          const recipeWords = recipe.title.toLowerCase().split(" ");
          return favoriteKeywords.some((keyword) =>
            recipeWords.some((word) => word.includes(keyword))
          );
        })
        .slice(0, 5);

      // If not enough similar recipes, add some random ones
      if (recommended.length < 3) {
        const randomRecipes = state.recipes
          .filter(
            (recipe) =>
              !state.favorites.includes(recipe.id) &&
              !recommended.find((r) => r.id === recipe.id)
          )
          .sort(() => 0.5 - Math.random())
          .slice(0, 3 - recommended.length);

        recommended.push(...randomRecipes);
      }

      return { recommendations: recommended };
    }),
}));

export { useRecipeStore };
