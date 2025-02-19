import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1.jsx"; // Importación corregida
import Page2 from "./pages/page2.jsx";
import Carousel from "./pages/carrusel.jsx";
import ArticleGrid from "./pages/ArticleGrid.tsx";
import Footer from "./pages/footer.tsx";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Page1 /><Page2/><Carousel/><ArticleGrid/><Footer/> </>}  />
        </Routes>
    </Router>
  );
}

export default App;
