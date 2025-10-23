import Cards from "../../styles/components/tourExpeditions/cardsSection.module.scss";
import { getTours } from "../../assets/API/Services/ToursService";
import { motion } from "motion/react";

function CardsSection() {
  return (
    <section className={Cards.cards_section_container}>
      <motion.header
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{
          delay: 0.1,
          y: { duration: 0.5, ease: "easeInOut" },
          opacity: { duration: 1.2, ease: "easeOut" },
        }}
        className={Cards.cards_section_text_container}
      >
        <h1 className={Cards.cards_section_title}>TIME TO PICK YOUR TOUR</h1>
        <p className={Cards.cards_section_description}>
          From Brazil’s samba beats to Peru’s rich flavors and vibrant
          indigenous traditions, each expedition offers something unforgettable.
          Choose 2–5 day tours with expert guides and all-inclusive service —
          your adventure awaits.
        </p>
      </motion.header>

      <div className={Cards.cards_container}>
        <div className={Cards.card_individual_container}>
          <figure className={Cards.card_image_container}>
            <img
              src="https://res.cloudinary.com/dbuxt1ti8/image/upload/v1755138303/tours/irvfiutfwc1vbfnhu0sk.jpg"
              alt="Tour Image"
              className={Cards.card_image}
            />
          </figure>
          <div className={Cards.card_text_container}>
            <h2 className={Cards.card_title}>Tour Title</h2>
            <p className={Cards.card_description}>
              Enjoy a full-day Amazon adventure: cruise the river, trek the
              jungle, see wildlife, savor local lunch, and spot pink dolphins.
            </p>
            <button className={Cards.card_button}>View Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
