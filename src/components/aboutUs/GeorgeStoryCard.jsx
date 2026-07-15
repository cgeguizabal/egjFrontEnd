import { motion } from "motion/react";
import George from "../../assets/images/George.png";
import card from "../../styles/components/aboutUs/georgeStoryCard.module.scss";

function GeorgeStoryCard() {
  return (
    <section id="story" className={card.section}>
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-5%" }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className={card.section_header}
      >
        <span className={card.section_eyebrow}>A Life Story</span>
        <h2 className={card.section_heading}>
          A Life Story Of George Of The Jungle
        </h2>
        <hr className={card.section_hr} />
      </motion.header>

      <div className={card.layout}>
        {/* ── Left column ─────────────────────────────── */}
        <div className={card.left_col}>
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-5%" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
            className={card.profile_card}
          >
            <div className={card.profile_photo_wrapper}>
              <img
                src={George}
                alt="George of the Jungle"
                className={card.profile_photo}
              />
            </div>
            <div className={card.profile_info}>
              <span className={card.profile_role}>
                Guide · Agent · Entrepreneur
              </span>
              <h2 className={card.profile_name}>George</h2>
              <p className={card.profile_location}>
                Amazonian · Leticia, Colombia
              </p>
            </div>
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-5%" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            className={card.quote_card}
          >
            <p className={card.quote_tag}>Guide · Agent · Entrepreneur</p>
            <p className={card.quote_tag}>
              George — Amazonian · Leticia, Colombia
            </p>
            <hr className={card.quote_divider} />
            <p className={card.quote_text}>
              "The universe of jungle and river was the school where he learned
              about aboriginal culture, flora, fauna, ancestral medicine,
              trails, roads, and customs."
            </p>
            <div className={card.quote_badges}>
              <span className={card.badge}>30+ Years</span>
              <span className={card.badge}>Amazon Expert</span>
              <span className={card.badge}>BRACOPE</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right column: story card ─────────────────── */}
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-5%" }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeInOut" }}
          className={card.story_card}
        >
          <div className={card.story_body}>
            <p>
              His name is George. His origin has no borders. He is a BRACOPE
              descendant. Something Brazilian, Colombian and Peruvian runs
              through his DNA. At an early age, 10 years old, he connected with
              the first actions of tourist guidance. Joel, a character from the
              region, was known as TATU because of his small stature, of Miraña
              indigenous descent, a polyglot with a good knowledge of different
              languages, such as English, Portuguese, French, Spanish as well as
              native languages, he was his initial mentor and boss in what would
              be his life Project.
            </p>
            <p>
              At the age of 19, he began a formal job at the Hotel Anaconda in
              Leticia, Amazonas. Time when family, friends and foreign tourists
              chose to call him George. To later leverage as a trading name,
              George of the Jungle. Being born in a region dressed in a
              multicoloured jungle, magical as its sunrises and immense as his
              river, would make him a friendly man, good man, with the
              environment and the ecosystems of the Amazon Nature.
            </p>
            <p>
              The universe of jungle and river was the school where he learned
              aboriginal culture, flora, fauna, ancestral medicine, trails,
              roads, and customs... Prodigies of life that today define him as
              an expeditious guide, agent and entrepreneur specializing in
              everything which means Tourism in the Amazon.
            </p>
            <h3 className={card.story_subheading}>The Trilogy</h3>
            <p>
              Loving his profession with passion and respect leads him to
              recognize Amazonian characters that are part of his life story and
              the trilogy that they represented with unparalleled experience for
              adventure and nature tourism. Together with George Of the Jungle,
              Joel Mendoza TATU (q. e. p. d) and MOWGLI the Amazonian Tarzan.
              Leticiano admired for his great resemblance to the character in
              the stories of Disney's Mowgli Jungle Book.
            </p>
            <p>
              The three of them were born and grew up in the Colombian Amazon as
              recognized memorable icons, referenced by hundreds of tourists
              from many parts of the world who visit us longing for the tourism
              entrepreneurship services offered with complete satisfaction by
              these 3 wonderful characters. EXPEDITIONS GEORGE OF THE JUNGLE =
              EGJ.
            </p>
            <p>
              And the day came when the more than 30 years of work in Tourism,
              added up for George to consolidate his entrepreneurial business
              from Leticia and the Amazon, for the world: Expeditions George of
              the Jungle. Today, a company synonymous with the promotion and
              preservation of the environment, education, job opportunity,
              social and culture. Being the greatest passion, being able to
              integrate the native and the ancestral with the experiences of the
              wild and mystical scenery of the jungle and the hydric world of
              the greatest treasure that the Amazon represents.
            </p>
            <p>
              At Expedition George of the Jungle, nothing beats the satisfaction
              that George's exciting work gives like the happy and content
              tourists and visitors who expectantly decide to share the best
              days of their lives in the Amazon destination. The great home,
              lung of the earth that awaits you with splendid plans and
              services. Always welcome.
            </p>
            <p className={card.story_author}>By Gloria E Revelo C.</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default GeorgeStoryCard;
