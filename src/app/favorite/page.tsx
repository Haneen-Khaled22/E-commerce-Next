"use client";
import { useSelector } from "react-redux";

import Image from "next/image";
import { RootState } from "@/lib/store";
import { removeFromFav } from "@/lib/slice/favslice";
import FavButton from "../_components/FavButton";
import Link from "next/link";

export default function page() {
  const favlist = useSelector((state: RootState) => state.fav.items);
 

  return (
    <div className="max-w-5xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {favlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favlist.map((recipe) => (
            <div key={recipe.id}>
              <Link href={`/recipes/${recipe.id}`} className="block group border border-gray-200 rounded-lg p-4  hover:bg-gray-50">
                        {/* Recipe Image */}
                        <div className=" w-full h-48 rounded-lg overflow-hidden">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-80"
                            />
                        </div>
            
                        {/* Recipe Details */}
                        <div className="mt-4 flex-col justify-between">
                            <div className="flex  justify-between">
                            <h3 className="text-lg font-bold text-gray-800">{recipe.name}</h3>
                            <FavButton recipe={recipe}/>
                            </div>
                            
                            {/* Rating */}
                            <div className="flex items-center mt-1">
                                <span className="text-yellow-500 text-lg">
                                    {'★'.repeat(Math.round(recipe.rating))}{'☆'.repeat(5 - Math.round(recipe.rating))}
                                </span>
                                <p className="ml-2 text-sm text-gray-500">{recipe.rating} ({recipe.reviewCount} reviews)</p>
                            </div>
            
                            {/* Cuisine & Difficulty */}
                            <div className="flex justify-between mt-3 text-sm font-medium">
                                <span className="text-red-700">{recipe.cuisine}</span>
                                <span className="text-gray-600">{recipe.difficulty}</span>
                            </div>
                        </div>
                    </Link>

            </div>
           
          ))}
        </div>
      )}
    </div>
  );
}