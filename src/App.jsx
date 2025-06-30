import React from "react";
import { NavLink, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Api from "./Pages/Api";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Api" element={<Api />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
