import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UnitType } from "../global/types";
import { getUnitsAsync } from "../slice/UnitSlice";
import { RootState, AppDispatch } from "../store";

const UnitTable: React.FC = (): JSX.Element => {
  const units: UnitType[] = useSelector(
    (state: RootState) => state.units.units
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitsAsync());
  }, []);

  return (
    <div className="overflow-x-auto relative mx-20 text-white">
      <Link to="/addunit">
        <button className="p-3 mb-3  bg-green-600 rounded-md w-full">
          Add Unit
        </button>
      </Link>

      <table className="w-full text-sm text-center border-2 shadow-md rounded-lg">
        <thead className="text-xs uppercase bg-gray-5 bg-slate-800">
          <tr className="border">
            <th scope="col" className="py-3 px-6">
              Id
            </th>
            <th scope="col" className="py-3 px-6">
              Uint Name
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Affix
            </th>
          </tr>
        </thead>
        <tbody>
          {units &&
            units.map((item: UnitType) => {
              return (
                <tr className="bg-slate-700 border-b p-2" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.unit_category}</td>
                  <td>{item.affix}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTable;
