import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1.jsx"; // Importación corregida

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
        </Routes>
    </Router>
  );
}

export default App;
