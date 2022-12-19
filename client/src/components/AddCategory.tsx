import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { creatCategoryAsync } from "../slice/CategorySlice";
import { AppDispatch } from "../store";
import { CategoryType } from "../global/types";

const AddCategory: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [category, setUnit] = useState({} as CategoryType);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(creatCategoryAsync(category));
    navigate("/");
  };

  return (
    <form>
      <div className="mx-24 text-left">
        <label>category</label>
        <input
          type="text"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="new category..."
          required
          onChange={(e) => {
            setUnit({ ...category, category: e.target.value });
          }}
        />
        <label>standard</label>
        <input
          type="text"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="new standard..."
          required
          onChange={(e) => {
            setUnit({ ...category, standard: e.target.value });
          }}
        />
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default AddCategory;
