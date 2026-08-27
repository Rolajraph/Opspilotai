import Hero from "../components/Hero/Hero";
import DashboardPreview from "../components/DashboardPreview/DashboardPreview";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhyOpsPilot from "../components/WhyOpsPilot/WhyOpsPilot";
import ForBusiness from "../components/ForBusiness/ForBusiness";
import TeamSection from "../components/TeamSection/TeamSection";
import BuiltForLeaders from "../components/BuiltForLeaders/BuiltForLeaders";
import Testimonial from "../components/Testimonial/Testimonial";
import FAQ from "../components/FAQ/FAQ";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <DashboardPreview />
      <HowItWorks />
      <WhyOpsPilot />
      <ForBusiness />
      <TeamSection />
      <BuiltForLeaders />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
      {/* Next sections get added here as we build them */}
    </main>
  );
}