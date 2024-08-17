import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66c0a813ba6f27ca9a57442a.mockapi.io";
const perPage = 4;

export const fetchCars = createAsyncThunk('cars/fetchCampers', async (page, thunkAPI) => {
  try {
  const response = await axios.get(`/cars?&page=${page}&limit=${perPage}`);
  return response.data;
  } catch (error) { 
    return thunkAPI.rejectWithValue(error.message);
  }
});