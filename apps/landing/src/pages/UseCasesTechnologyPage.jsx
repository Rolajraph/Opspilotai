import TechHero from "../components/TechHero/TechHero";
import TechChallenge from "../components/TechChallenge/TechChallenge";
import TechBenefits from "../components/TechBenefits/TechBenefits";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import TechCTA from "../components/TechCTA/TechCTA";
import Footer from "../components/Footer/Footer";

export default function UseCasesTechnologyPage() {
  return (
    <main>
      <TechHero />
      <TechChallenge />
      <TechBenefits />
      <AboutFAQ />
      <TechCTA />
      <Footer />
    </main>
  );
}