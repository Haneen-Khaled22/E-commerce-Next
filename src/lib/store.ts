import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./slice/favslice";

export const store = configureStore({
    reducer:{

        fav:favReducer,

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
