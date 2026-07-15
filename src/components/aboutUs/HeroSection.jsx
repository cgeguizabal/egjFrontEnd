import { motion } from "motion/react";
import hero from "../../styles/components/aboutUs/heroSection.module.scss";

function HeroSection() {
  return (
    <section className={hero.hero_container}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-2%" }}
        transition={{
          delay: 0.1,
          y: { duration: 0.55, ease: "easeInOut" },
          opacity: { duration: 1.2, ease: "easeOut" },
        }}
        className={hero.hero_content}
      >
        <span className={hero.hero_eyebrow}>
          Leticia, Amazonas · Our Story
        </span>

        <h1 className={hero.hero_title}>
          About
          <br />
          <span className={hero.hero_title_highlight}>
            George Of
            <br />
            The Jungle
          </span>
        </h1>

        <hr className={hero.hero_hr} />

        <p className={hero.hero_description}>
          A life story of George of the Jungle, born from a multicoloured Amazon
          region and shaped by the river, the jungle, indigenous culture, and
          more than 30 years of tourism work
        </p>

        <div className={hero.hero_buttons}>
          <a href="#story" className={hero.hero_btn_primary}>Read Our Story</a>
          <a href="#purpose" className={hero.hero_btn_secondary}>Our Purpose</a>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
