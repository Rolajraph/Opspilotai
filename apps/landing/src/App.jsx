import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Additional routes (use-cases, solutions/:slug, pricing, etc.)
            get added here as those pages are built */}
      </Routes>
    </BrowserRouter>
  );
}