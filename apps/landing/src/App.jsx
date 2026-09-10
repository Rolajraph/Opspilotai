import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import SolutionsProfessionalServicesPage from "./pages/SolutionsProfessionalServicesPage";
import UseCasesTechnologyPage from "./pages/UseCasesTechnologyPage";
import SolutionsTechnologyPage from "./pages/SolutionsTechnologyPage";
import UseCasesProfessionalServicesPage from "./pages/UseCasesProfessionalServicesPage";
import UseCasesEducationPage from "./pages/UseCasesEducationPage";
import UseCasesHealthcarePage from "./pages/UseCasesHealthcarePage";
import UseCasesManufacturingPage from "./pages/UseCasesManufacturingPage";
import RequestDemoPage from "./pages/RequestDemoPage";
import "./styles/global.css";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solutions/professional-services" element={<SolutionsProfessionalServicesPage />} />
        <Route path="/use-cases/technology" element={<UseCasesTechnologyPage />} />
        <Route path="/solutions/technology" element={<SolutionsTechnologyPage />} />
        <Route path="/use-cases/professional-services" element={<UseCasesProfessionalServicesPage />} />
        <Route path="/use-cases/education" element={<UseCasesEducationPage />} />
        <Route path="/use-cases/healthcare" element={<UseCasesHealthcarePage />} />
        <Route path="/use-cases/manufacturing-logistics" element={<UseCasesManufacturingPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}