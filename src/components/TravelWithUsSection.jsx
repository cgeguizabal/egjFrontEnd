import travel from "../styles/components/travelWithUs.module.scss";
import card1 from "../assets/images/Card1.png";
import card2 from "../assets/images/Card2.png";
import card3 from "../assets/images/Card3.png";
import card4 from "../assets/images/Card4.png";

function TravelWithUsSection() {
  return (
    <section className={travel.travel_container}>
      <div className={travel.travel_title}>
        <h1>WHY TRAVEL WITH US?</h1>
      </div>
      <hr className={travel.hr} />
      {/* Cards */}
      <div className={travel.cards}>
        <div className={travel.card_container}>
          <img className={travel.card_image} src={card1} alt="Card 1" />
          <h4 className={travel.card_title}>
            Locally Rooted, English-Speaking Guides
          </h4>
        </div>
        <div className={travel.card_container}>
          <img className={travel.card_image} src={card2} alt="Card 1" />
          <h4 className={travel.card_title}>
            Authentic, Immersive & Eco-Conscious
          </h4>
        </div>
        <div className={travel.card_container}>
          <img className={travel.card_image} src={card3} alt="Card 1" />
          <h4 className={travel.card_title}>Unforgettable Jungle Adventures</h4>
        </div>
        <div className={travel.card_container}>
          <img className={travel.card_image} src={card4} alt="Card 1" />
          <h4 className={travel.card_title}>Well-Planned Experiences</h4>
        </div>
      </div>
      <div className={travel.button_container}>
        {" "}
        <button className={travel.button}>SEE TOURS</button>
      </div>
    </section>
  );
}

export default TravelWithUsSection;
