import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import TrendsSection from "./components/TrendsSection/TrendsSection";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <TrendsSection />
      </div>
    </>
  );
}

export default App;
