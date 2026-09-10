import ManufacturingHero from "../components/ManufacturingHero/ManufacturingHero";
import ManufacturingChallenge from "../components/ManufacturingChallenge/ManufacturingChallenge";
import ManufacturingBenefits from "../components/ManufacturingBenefits/ManufacturingBenefits";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import ManufacturingCTA from "../components/ManufacturingCTA/ManufacturingCTA";
import Footer from "../components/Footer/Footer";

export default function UseCasesManufacturingPage() {
  return (
    <main>
      <ManufacturingHero />
      <ManufacturingChallenge />
      <ManufacturingBenefits />
      <AboutFAQ />
      <ManufacturingCTA />
      <Footer />
    </main>
  );
}