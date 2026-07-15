import Navbar from "../components/NavBar";
import about from "../styles/pages/aboutUs.module.scss";
import HeroSection from "../components/aboutUs/HeroSection";
import GeorgeStoryCard from "../components/aboutUs/GeorgeStoryCard";
import HeritageSection from "../components/aboutUs/HeritageSection";
import PurposeSection from "../components/aboutUs/PurposeSection";

function AboutUs() {
  return (
    <div className={`${about.about_container} grid-container`}>
      <Navbar />
      <HeroSection />
      <GeorgeStoryCard />
      <HeritageSection />
      <PurposeSection />
    </div>
  );
}

export default AboutUs;
