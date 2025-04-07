import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
interface FavState {
  items: Recipe[];
}

const initialState: FavState = {
  items: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<Recipe>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        console.log("Item already exists in favorites.");
      }
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);

    },
  },
});

export const {addToFav,removeFromFav} = favSlice.actions;
export default favSlice.reducer;
