import EducationHero from "../components/EducationHero/EducationHero";
import EducationChallenge from "../components/EducationChallenge/EducationChallenge";
import EducationBenefits from "../components/EducationBenefits/EducationBenefits";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import EducationCTA from "../components/EducationCTA/EducationCTA";
import Footer from "../components/Footer/Footer";

export default function UseCasesEducationPage() {
  return (
    <main>
      <EducationHero />
      <EducationChallenge />
      <EducationBenefits />
      <AboutFAQ />
      <EducationCTA />
      <Footer />
    </main>
  );
}