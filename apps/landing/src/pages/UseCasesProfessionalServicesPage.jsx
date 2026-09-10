import UCProfServHero from "../components/UCProfServHero/UCProfServHero";
import UCProfServChallenge from "../components/UCProfServChallenge/UCProfServChallenge";
import UCProfServBenefits from "../components/UCProfServBenefits/UCProfServBenefits";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import UCProfServCTA from "../components/UCProfServCTA/UCProfServCTA";
import Footer from "../components/Footer/Footer";

export default function UseCasesProfessionalServicesPage() {
  return (
    <main>
      <UCProfServHero />
      <UCProfServChallenge />
      <UCProfServBenefits />
      <AboutFAQ />
      <UCProfServCTA />
      <Footer />
    </main>
  );
}