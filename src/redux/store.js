import { configureStore } from "@reduxjs/toolkit";

import { carsReducer } from "./carsSlice";
import { filtersReducer } from "./filtersSlice";
import { favoriteReducer } from "./favoriteSlice";

 export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorite: favoriteReducer,
  },
});