import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, createCategory } from "../utils/api";
import { CategoryType } from "../global/types";

const initialState = {
  categories: [] as CategoryType[],
};

export const getCategoriesAsync = createAsyncThunk("categories/get", async () =>
  getCategories().then((res) => res.data)
);
export const creatCategoryAsync = createAsyncThunk(
  "categories/create",
  async (data: CategoryType) => {
    createCategory(data).then((res) => res.data);
  }
);
export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(creatCategoryAsync.fulfilled, (state, action: any) => {
      });
  },
});

export const selectCategories = (state: any) => state.categories.categories;
export default categorySlice.reducer;
