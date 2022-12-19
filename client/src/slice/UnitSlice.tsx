import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUnits, createUnit } from "../utils/api";
import { UnitType } from "../global/types";

const initialState = {
  units: [] as UnitType[],
};

export const getUnitsAsync = createAsyncThunk("units/get", async () => {
  return getUnits().then((res) => res.data);
});

export const createUnitAsync = createAsyncThunk(
  "units/create",
  async (data: UnitType) => {
    return createUnit(data).then((res) => res.data);
  }
);
export const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUnitsAsync.fulfilled, (state, action) => {
        state.units = action.payload;
      })
      .addCase(createUnitAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.units.push(action.payload)
      });
  },
});

export default unitSlice.reducer;
