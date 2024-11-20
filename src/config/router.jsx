import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Lineal from "../components/GeoGebra/lineal";
import Quadratic from "../components/GeoGebra/Quadratic";
import Cubic from "../components/GeoGebra/Cubic";
import OneCurve from "../components/GeoGebra/OneCurve";
import TwoCurves from "../components/GeoGebra/TwoCurves";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="GeoBravo/" element={<HomePage />} />
      <Route path="GeoBravo/Lineal" element={<Lineal />} />
      <Route path="GeoBravo/Quadratic" element={<Quadratic />} />
      <Route path="GeoBravo/Cubic" element={<Cubic />} />
      <Route path="GeoBravo/Onecurve" element={<OneCurve />} />
      <Route path="GeoBravo/Twocurves" element={<TwoCurves />} />
    </Routes>
  );
};

export default AppRouter;
