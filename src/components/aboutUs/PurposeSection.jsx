import { motion } from "motion/react";
import purpose from "../../styles/components/aboutUs/purposeSection.module.scss";

const missionTags = ["Sustainability", "Expert Guides", "Education", "Safety"];
const visionTags = [
  "Responsibility",
  "Indigenous Integration",
  "Conservation",
  "Socioeconomic",
];

function PurposeSection() {
  return (
    <section id="purpose" className={purpose.section}>
      {/* Section header */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-5%" }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className={purpose.header}
      >
        <span className={purpose.header_eyebrow}>Purpose</span>
        <h2 className={purpose.header_heading}>What Drives Us</h2>
        <hr className={purpose.header_hr} />
        <p className={purpose.header_intro}>
          The values that guide every expedition we organize, from the first step
          into the canopy to the last sunset over the river.
        </p>
      </motion.header>

      <div className={purpose.blocks}>
        {/* Mission block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-5%" }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeInOut" }}
          className={purpose.block}
        >
          <span className={purpose.block_label}>Mission</span>
          <h3 className={purpose.block_title}>Captivate, Educate, Preserve</h3>
          <p className={purpose.block_text}>
            Our mission is to promote the Amazon rainforest in Leticia, Amazonas,
            South Colombia, and offer expedition tours that captivate adventurers
            from around the world. We prioritize sustainability, providing expert
            guides, unique experiences, safety, and comfort. Through education
            and awareness, we aim to preserve the rainforest's biodiversity and
            enrich the lives of our visitors. Join us in exploring the wonders of
            the Amazon — the lungs of the Earth.
          </p>
          <div className={purpose.tags}>
            {missionTags.map((tag) => (
              <span key={tag} className={purpose.tag}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Vertical divider */}
        <div className={purpose.block_divider} />

        {/* Vision block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-5%" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className={purpose.block}
        >
          <span className={purpose.block_label}>Vision</span>
          <h3 className={purpose.block_title}>
            An Ecotourism Destination For The World
          </h3>
          <p className={purpose.block_text}>
            We promote responsible use of the planet, providing nature lovers
            with endless possibilities in the tropical forest. Our vision is to
            convert the Amazon into premier ecotourism destinations, integrating
            indigenous communities and fostering global responsibility. Join us
            for a rewarding and transformative experience in the Amazon, where
            peace, tranquility, and conservation thrive.
          </p>
          <div className={purpose.tags}>
            {visionTags.map((tag) => (
              <span key={tag} className={purpose.tag}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PurposeSection;
