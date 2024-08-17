import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";

export const App = () => {

  return (
    <div className="container">
      <HomePage />
      {/* <Catalog /> */}
    </div>
  );
};

export default App;
