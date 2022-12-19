import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import UnitTable from "./pages/UnitTable";
import Conversion from "./pages/Conversion";
import AddUnit from "./components/AddUnit";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <div className="mt-24 text-center">
        <Routes>
          <Route path="/" element={<UnitTable />}></Route>
          <Route path="/addunit" element={<AddUnit />}></Route>
          <Route path="/conversion" element={<Conversion />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
