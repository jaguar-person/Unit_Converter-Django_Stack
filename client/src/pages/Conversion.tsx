import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UnitType } from "../global/types";

type ConvertUnit = {
  id: number;
  value: number;
};

const Conversion: React.FC = (): JSX.Element => {
  const [fromUnit, setFrom] = useState({} as ConvertUnit);
  const [toUnit, setTo] = useState({
    id: 0,
    value: 0,
  } as ConvertUnit);

  const units: UnitType[] = useSelector(
    (state: RootState) => state.units.units
  );
  const handleConvert = () => {
    let result =
      (units[fromUnit.id - 1].affix / units[toUnit.id - 1].affix) *
      fromUnit.value;

    result = Number(result.toFixed(6));

    setTo({ ...toUnit, value: result });
  };
  return (
    <div className="overflow-x-auto relative mx-20">
      <div className="flex gap-16 justify-center">
        <div className="border border-slate-700 rounded-md p-5 text-left">
          <p className="text-red-500 font-medium p-3 text-center">Unit Value</p>
          <input
            type="text"
            className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="unit value"
            onChange={(e) => {
              setFrom({ ...fromUnit, value: Number(e.target.value) });
            }}
            required
          />
          <label>Category</label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => {
              setFrom({ ...fromUnit, id: Number(e.target.value) });
            }}
          >
            <option></option>
            {units &&
              units.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="border border-slate-700 rounded-md p-5 text-left">
          <p className="text-red-500 font-medium p-3 text-center">
            Unit Value to Convert
          </p>
          <input
            type="text"
            className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="new unit..."
            value={toUnit.value}
            readOnly
            required
          />
          <label>Category</label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => {
              setTo({ ...toUnit, id: Number(e.target.value) });
            }}
          >
            <option></option>
            {units &&
              units.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div>
        <button
          className="p-3 bg-green-600 rounded-md mt-10 w-32 text-white"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      <div className="result">{/* price2=price1* affix1/affix2 */}</div>
    </div>
  );
};

export default Conversion;
