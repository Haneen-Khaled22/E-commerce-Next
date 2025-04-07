// import Link from 'next/link';
// import React from 'react';

// export interface Recipe {
//   id: number;
//   name: string;
//   ingredients: string[];
//   instructions: string[];
//   prepTimeMinutes: number;
//   cookTimeMinutes: number;
//   servings: number;
//   difficulty: string;
//   cuisine: string;
//   caloriesPerServing: number;
//   tags: string[];
//   userId: number;
//   image: string;
//   rating: number;
//   reviewCount: number;
//   mealType: string[];
//   href: string;
// }

// export const metadata = {
//   title: "Recipes",
//   description: "Recipes website"
// };

// export default async function Page() {
//   const res = await fetch('https://dummyjson.com/recipes');
//   const data = await res.json();

//   // Group recipes by mealType
//   const categorizedRecipes: { [key: string]: Recipe[] } = {};

//   data.recipes.forEach((recipe: Recipe) => {
//     recipe.mealType.forEach((type) => {
//       if (!categorizedRecipes[type]) {
//         categorizedRecipes[type] = [];
//       }
//       categorizedRecipes[type].push(recipe);
//     });
//   });

//   return (
//     <div className="mx-auto max-w-7xl px-8 py-10">
//       {Object.keys(categorizedRecipes).map((category) => (
//         <div key={category} className="mb-10">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {categorizedRecipes[category].map((recipe) => (
//               <Link key={recipe.id} href={`recipes/${recipe.id}`} className="group transition duration-300 ease-in-out border border-gray-200 rounded-lg p-2 hover:bg-gray-50">
//                 <img
//                   alt={recipe.name}
//                   src={recipe.image}
//                   height={300}
//                   className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
//                 />
//                 <p className="mt-2 text-xl font-bold text-gray-800">{recipe.name}</p>
//                 <div className="flex items-center mt-1">
//                   <span className="text-yellow-500 text-lg">
//                     {'★'.repeat(Number(recipe.rating))}{'☆'.repeat(5 - Number(recipe.rating))}
//                   </span>
//                   <p className="ml-2 text-lg text-gray-400">{recipe.rating}</p>
//                 </div>
//                 <div className="flex items-center justify-between mt-3">
//                   <p className="text-lg font-semibold text-red-800">{recipe.cuisine}</p>
//                   <p className="text-lg font-medium text-gray-500">{recipe.difficulty}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from 'react'

import CategoryList from '../_components/CategoryList';

interface Props {
  searchParams :Promise<{mealType:String}>
}

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

async function Page({searchParams}: Props) {

  const categoryPaths = [
    {name:'Breakfast', path: '/category/breakfast'},
    {name:'Lunch', path: '/category/lunch'},
    {name:'Dinner', path: '/category/dinner'}, 
    {name:'Dessert', path: '/category/dessert'},
    {name:'Snacks', path: '/category/snacks'},
    {name:'Snack', path: '/category/snack'},
    {name:'Drink', path: '/category/drink'},
    {name:'Appetizer', path: '/category/appitizer'},
    {name:'Side Dish', path: '/category/side dish'},
    {name:'Beverage', path: '/category/beverage'},
  ]
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  console.log(data.recipes);

  const {mealType} = await  searchParams;
  const filteredValue = mealType??"All";
  console.log(filteredValue);

   
  return(
    <div>

    <CategoryList filteredValue={filteredValue}/>
    </div>
  )
}

export default Page
