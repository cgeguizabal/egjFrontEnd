import Hero from "../components/Hero";
import home from "../styles/pages/home.module.scss";
import Navbar from "../components/NavBar";
import VideoSection from "../components/VideoSection";

function Home() {
  return (
    <>
      <main className={`${home.home_container} grid-container`}>
        <Navbar className={`${home.navbar}`} />
        <Hero />
        <VideoSection />
      </main>
    </>
  );
}

export default Home;
