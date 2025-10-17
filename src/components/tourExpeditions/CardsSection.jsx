import Cards from "../../styles/components/tourExpeditions/cardsSection.module.scss";
import { getTours } from "../../assets/API/Services/ToursService";

function CardsSection() {
  return (
    <section className={Cards.cards_section_container}>
      <header className={Cards.cards_section_text_container}>
        <h1 className={Cards.cards_section_title}>TIME TO PICK YOUR TOUR</h1>
        <p className={Cards.cards_section_description}>
          From Brazil’s samba beats to Peru’s rich flavors and vibrant
          indigenous traditions, each expedition offers something unforgettable.
          Choose 2–5 day tours with expert guides and all-inclusive service —
          your adventure awaits.
        </p>
      </header>

      <div className={Cards.cards_container}>
        <div className={Cards.card_individual_container}>
          <figure className={Cards.card_image_container}>
            <img
              src="https://res.cloudinary.com/dbuxt1ti8/image/upload/v1755138303/tours/irvfiutfwc1vbfnhu0sk.jpg"
              alt="Tour Image"
            />
          </figure>
          <div className={Cards.card_text_container}>
            <h2 className={Cards.card_title}>Tour Title</h2>
            <p className={Cards.card_description}>
              Brief description of the tour goes here.
            </p>
          </div>

          <button className={Cards.card_button}>View Details</button>
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
