import SolTechHero from "../components/SolTechHero/SolTechHero";
import SolTechChallenge from "../components/SolTechChallenge/SolTechChallenge";
import SolTechHelps from "../components/SolTechHelps/SolTechHelps";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import SolTechCTA from "../components/SolTechCTA/SolTechCTA";
import Footer from "../components/Footer/Footer";

export default function SolutionsTechnologyPage() {
  return (
    <main>
      <SolTechHero />
      <SolTechChallenge />
      <SolTechHelps />
      <AboutFAQ />
      <SolTechCTA />
      <Footer />
    </main>
  );
}