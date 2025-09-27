import heroSection from "../styles/components/heroSection.module.scss";

const Hero = () => {
  return (
    <section className={heroSection.hero_section}>
      <h1 className={heroSection.title}>
        THE JOURNEY <span className={heroSection.highlight}>OF YOUR LIFE</span>{" "}
      </h1>
      <h4 className={heroSection.subtitle}>
        Reconnect with nature on our Amazon Rainforest tours with
        <span className={heroSection.highlight_2}>
          English-speaking guides.
        </span>
      </h4>
      <hr className={heroSection.hr} />
      <button className={heroSection.button}>BOOK TOUR</button>
    </section>
  );
};

export default Hero;
