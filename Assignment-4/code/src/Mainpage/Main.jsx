/** @format */

import React from "react";
import NotFound from "./NotFound";
import Postview from "../Postview";
import Landingpage from "../Landingpage/Landingpage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/postview" element={<Postview />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
