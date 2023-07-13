import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Trends from "./components/Trends/Trends";

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
        <Trends />
      </div>
    </>
  );
}

export default App;
