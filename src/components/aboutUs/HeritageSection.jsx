import { motion } from "motion/react";
import AboutUsImage from "../../assets/images/AboutUsImage.png";
import heritage from "../../styles/components/aboutUs/heritageSection.module.scss";

function HeritageSection() {
  return (
    <section className={heritage.section}>
      <div
        className={heritage.image_bg}
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      />
      <div className={heritage.overlay} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-5%" }}
        transition={{
          delay: 0.1,
          y: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 1.1, ease: "easeOut" },
        }}
        className={heritage.content}
      >
        <span className={heritage.eyebrow}>
          Heritage · Amazonas · 1990 - Today
        </span>
        <h2 className={heritage.heading}>
          A Legacy That Lives{" "}
          <span className={heritage.heading_highlight}>In The Present</span>
        </h2>
        <hr className={heritage.hr} />
        <p className={heritage.description}>
          Three decades guiding travelers through the soul of the Amazon,
          bridging ancestral wisdom, sustainable adventure, and the living pulse
          of Leticia.
        </p>
      </motion.div>
    </section>
  );
}

export default HeritageSection;
