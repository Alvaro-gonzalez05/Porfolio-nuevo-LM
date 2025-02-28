
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1.tsx"; // Importación corregida
import Page2 from "./pages/page2.tsx";
import Carousel from "./pages/carrusel.tsx";
import ArticleGrid from "./pages/PortfolioGrid.tsx";
import Footer from "./pages/footer.tsx";
import CVU from "./pages/cvu.tsx";
import Timeline from "./pages/Timeline.tsx";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Page1 /><Page2/><Carousel/><ArticleGrid/><Timeline/><CVU/><Footer/> </>}  />
        </Routes>
    </Router>
  );
}

export default App;
