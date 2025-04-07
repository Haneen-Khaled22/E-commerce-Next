
import TextExpander from "@/app/_components/Text_Expander";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
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

export  const generateMetadata = async({params}:Props)=>{
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data: Props = await res.json();
  return {title:data.name}

}

export default async function fetchRecipe({ params }: Props) {
  const id = await params
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data: Props = await res.json();
  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <img
          alt="Product Image"
          src={data.image}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full md:w-1/2"
        />
        <div className="flex flex-col justify-center gap-5 p-4 md:w-1/2">
          <p className="text-3xl font-bold text-gray-800">{data.name}</p>
          <div className="flex flex-col">
            <p className="text-xl text-red-700">Ingredients:</p>
            <ul className="text-lg text-gray-700">
             <TextExpander>
             {data.ingredients.length > 0 ? (
                data.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <li className="text-gray-500">No ingredients available</li>
              )}
             </TextExpander>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">
              {"★".repeat(Number(data.rating))}
              {"☆".repeat(5 - Number(data.rating))}
            </span>
            <p className="text-lg text-gray-500">{data.rating}</p>
          </div>
          <div>
            <p className="text-xl text-red-700">Instructions:</p>
            <ul className="text-lg text-gray-700">
              <TextExpander>
              {data.instructions.length > 0 ? (
                data.instructions.map((instruction, index) => (
                  <li key={index}>
                 
                    {instruction}
                   
                    
                    </li>
                ))
              ) : (
                <li className="text-gray-500">No instructions available</li>
              )}
              </TextExpander>
             
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p className="text-lg">
              <span className="text-red-700 font-semibold">Prep Time:</span> {data.prepTimeMinutes} mins
            </p>
            <p className="text-lg">
              <span className="text-red-700 font-semibold">Cook Time:</span> {data.cookTimeMinutes} mins
            </p>
            <p className="text-lg">
              <span className="text-red-700 font-semibold">Calories:</span> {data.caloriesPerServing} kcal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
