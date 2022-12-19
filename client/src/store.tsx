import { configureStore } from "@reduxjs/toolkit";
import  unit  from "./slice/UnitSlice";
import  category from "./slice/CategorySlice";
import {useDispatch} from 'react-redux'

export const store = configureStore({
  reducer: {
    units: unit,
    categories: category,
  },
});



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;