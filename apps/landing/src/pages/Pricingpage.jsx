import PricingHero from "../components/PricingHero/PricingHero";
import PricingCards from "../components/PricingCards/PricingCards";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingCards />
      <FAQ />
      <Footer />
    </main>
  );
}