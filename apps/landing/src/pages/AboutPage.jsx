import AboutHero from "../components/AboutHero/AboutHero";
import OurStory from "../components/OurStory/OurStory";
import MissionVision from "../components/MissionVision/MissionVision";
import WhatWeBelieve from "../components/WhatWeBelieve/WhatWeBelieve";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CoreValues from "../components/CoreValues/CoreValues";
import AboutFAQ from "../components/AboutFAQ/AboutFAQ";
import AboutCTA from "../components/AboutCTA/AboutCTA";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeBelieve />
      <WhatWeDo />
      <WhoWeServe />
      <WhyChooseUs />
      <CoreValues />
      <AboutFAQ />
      <AboutCTA />
      <Footer />
    </main>
  );
}