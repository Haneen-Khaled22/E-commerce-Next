import React from 'react'
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


async function RecipeList() {
   

    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    console.log(data.recipes);

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {data.recipes.map((recipe:Recipe) => (
                
                    <div key={recipe.id}>
                        <RecipeCart recipe={recipe}/>
                    </div>
                  ))} 
                </div>
    )
}

export default RecipeList
