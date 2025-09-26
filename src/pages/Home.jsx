import Hero from "../components/Hero";
import home from "../styles/pages/home.module.scss";
import Navbar from "../components/NavBar";

function Home() {
  return (
    <>
      <div className={home.home_container}>
        <Navbar />
        <h1>HERO SECTION</h1>
      </div>
    </>
  );
}

export default Home;
