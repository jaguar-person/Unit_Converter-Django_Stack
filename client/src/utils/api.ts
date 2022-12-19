import axios from "axios";
import { baseURL } from "./sevices";
import { UnitType, CategoryType } from "../global/types";

const API = axios.create({ baseURL: baseURL });

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err.response.data;
  }
);

export const getUnits = () => API.get("/unit/");
export const createUnit = (data: UnitType) => API.post("/unit/", data);
export const getCategories = () => API.get("/unit_category/");
export const createCategory = (data: CategoryType) =>
  API.post("/unit_category/", data);
