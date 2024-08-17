import { createSelector } from "@reduxjs/toolkit";

export const selectAllCars = (state) => state.cars.campers;
export const getCarsStatus = (state) => state.cars.loading;
export const getCarsError = (state) => state.cars.error;
export const selectLocationFilter = (state) => state.filters.location;
export const selectTypeFilter = (state) => state.filters.type;

export const selectFavoriteCars = (state) => state.favorite.favorite;


export const selectFilteredCars = createSelector(
    [selectAllCars, selectLocationFilter, selectTypeFilter],
    (campers, filter, type) => {
      return campers.filter((camper) =>
        camper.location.toLowerCase().includes(filter.toLowerCase()) && camper.form.includes(type)
      );
    }
  );

  export const selectFilteredFavorites = createSelector(
    [selectFavoriteCars, selectLocationFilter, selectTypeFilter],
    (campers, filter, type) => {
      return campers.filter((camper) =>
        camper.location.toLowerCase().includes(filter.toLowerCase()) && camper.form.includes(type)
      );
    }
  );