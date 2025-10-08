import Hero from "../components/Hero";
import home from "../styles/pages/home.module.scss";
import Navbar from "../components/NavBar";
import VideoSection from "../components/VideoSection";
import TravelWithUsSection from "../components/TravelWithUsSection";
import BePartOfUs from "../components/BePartOfUs";

function Home() {
  return (
    <>
      <main className={`${home.home_container} grid-container`}>
        <Navbar className={`${home.navbar}`} />
        <Hero />
        <VideoSection />
        <TravelWithUsSection />
        <BePartOfUs />
      </main>
    </>
  );
}

export default Home;
