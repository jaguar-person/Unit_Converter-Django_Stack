import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="bg-slate-800 p-5 text-center relative text-white">
      <p className=" text-2xl">Unit Convert</p>
      <div className="absolute gap-3 flex right-5 top-3">
        <Link to='/'><button className="p-3 bg-green-600 rounded-md">Home</button></Link>
        <Link to='/conversion'><button className="p-3 bg-green-600 rounded-md">Conversion</button></Link>

      </div>
    </div>
  );
};

export default Header;
