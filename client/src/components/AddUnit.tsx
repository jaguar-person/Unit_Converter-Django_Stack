import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUnitAsync } from "../slice/UnitSlice";
import { RootState, AppDispatch } from "../store";
import { CategoryType, UnitType } from "../global/types";
// import { getCategoriesAsync } from "../slice/CategorySlice";

const AddUnit: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [unit, setUnit] = useState({} as UnitType);
  const navigate = useNavigate();

  const categories: CategoryType[] = useSelector(
    (state: RootState) => state.categories.categories
  );

  // useEffect(() => {
  //   dispatch(getCategoriesAsync());
  // }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createUnitAsync(unit));
    navigate("/");
  };

  return (
    <form>
      <div className="mx-24 text-left">
        <label>New Unit</label>
        <input
          type="text"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="new unit..."
          required
          onChange={(e) => {
            setUnit({ ...unit, name: e.target.value });
          }}
        />
        <label>Category</label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => {
            setUnit({ ...unit, unit_category: Number(e.target.value) });
          }}
        >
          <option></option>
          {categories &&
            categories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.category}
              </option>
            ))}
        </select>
        <label>Affix</label>
        <input
          type="text"
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="affix..."
          required
          onChange={(e) => {
            setUnit({ ...unit, affix: Number(e.target.value) });
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

export default AddUnit;
