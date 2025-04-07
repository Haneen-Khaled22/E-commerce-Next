import React from 'react';
import RecipeCart from './RecipeCart';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
  href: string;
}

interface Props {
  filteredValue: string;
}

async function CategoryList({ filteredValue }: Props) {
  let filteredRecipes: Recipe[] = [];

  try {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    filteredRecipes = data.recipes;

    switch (filteredValue) {
      case "Breakfast":
        filteredRecipes = data.recipes.filter((type: Recipe) => type.mealType.includes("Breakfast"));
        break;
      case "Lunch":
  filteredRecipes = data.recipes.filter((type: Recipe) => type.mealType.includes("Lunch"));
  break;
        break;
      case "Dinner":
        filteredRecipes = data.recipes.filter((type: Recipe) => type.mealType.includes("Dinner"));
        break;
      case "Snack" :
        filteredRecipes = data.recipes.filter((type: Recipe) => type.mealType.includes("Snack"));
        break;
      case "Dessert":
        filteredRecipes = data.recipes.filter((type: Recipe) =>type.mealType.includes("Dessert"));
        break;
      case "Side Dish":
        filteredRecipes = data.recipes.filter((type: Recipe) =>type.mealType.includes("Side Dish"));
        break;
      case "Beverage":
        filteredRecipes = data.recipes.filter((type: Recipe) =>type.mealType.includes("Beverage"));
        break;
      case "Appetizer":
        filteredRecipes = data.recipes.filter((type: Recipe) => type.mealType.includes("Appetizer"));
        break;
      default:
        filteredRecipes = data.recipes;
    }
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
  }

  if (filteredRecipes.length === 0) {
    return <div>No recipes found for the selected category.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {filteredRecipes.map((recipe: Recipe) => (
        <div key={recipe.id}>
          <RecipeCart recipe={recipe} />
        </div>
      ))}
    </div>
  );
}

export default CategoryList;