import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'campers',
  initialState: {
  campers: [],
 loading: false,
 error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;