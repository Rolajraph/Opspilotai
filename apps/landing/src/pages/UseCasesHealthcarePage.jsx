import HealthcareHero from "../components/HealthcareHero/HealthcareHero";
import HealthcareChallenge from "../components/HealthcareChallenge/HealthcareChallenge";
import HealthcareBenefits from "../components/HealthcareBenefits/HealthcareBenefits";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import HealthcareCTA from "../components/HealthcareCTA/HealthcareCTA";
import Footer from "../components/Footer/Footer";

export default function UseCasesHealthcarePage() {
  return (
    <main>
      <HealthcareHero />
      <HealthcareChallenge />
      <HealthcareBenefits />
      <AboutFAQ />
      <HealthcareCTA />
      <Footer />
    </main>
  );
}