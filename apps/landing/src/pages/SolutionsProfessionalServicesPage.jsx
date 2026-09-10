import ProfServicesHero from "../components/ProfServicesHero/ProfServicesHero";
import TheChallenge from "../components/TheChallenge/TheChallenge";
import HowOpsPilotHelps from "../components/HowOpsPilotHelps/HowOpsPilotHelps";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import ProfServicesCTA from "../components/ProfServicesCTA/ProfServicesCTA";
import Footer from "../components/Footer/Footer";

export default function SolutionsProfessionalServicesPage() {
  return (
    <main>
      <ProfServicesHero />
      <TheChallenge />
      <HowOpsPilotHelps />
      <AboutFAQ />
      <ProfServicesCTA />
      <Footer />
    </main>
  );
}