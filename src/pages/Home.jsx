import Hero from "../components/Hero";
import home from "../styles/pages/home.module.scss";
import Navbar from "../components/NavBar";

function Home() {
  return (
    <>
      <main className={`${home.home_container} grid-container`}>
        <Navbar className={`${home.navbar}`} />
        <Hero />
      </main>
    </>
  );
}

export default Home;
