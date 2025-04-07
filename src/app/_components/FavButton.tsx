"use client";

import { addToFav, removeFromFav } from '@/lib/slice/favslice';
import { RootState } from '@/lib/store';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

interface Recipe {
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
  recipe: Recipe;
}

function FavButton({ recipe }: Props) {
  const dispatch = useDispatch();
  const favList = useSelector((state: RootState) => state.fav.items);

  
  const isInList = favList.some(item => item.id === recipe.id);

  const handleAddToFavList = () => {
    if (isInList) {
      dispatch(removeFromFav(recipe.id));
    } else {
      dispatch(addToFav(recipe));
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddToFavList();
        }}
        className="text-red-600 hover:text-red-800"
        aria-label="Toggle Favorite"
      >
        <FaHeart
          size={24}
          className={isInList ? "text-red-500" : "text-gray-400"}
        />
      </button>
    </div>
  );
}

export default FavButton;
