import { useRef, useState } from "react";
import bePartOfUs from "../styles/components/bePartOfUs.module.scss";
import { IoMdVolumeOff, IoIosVolumeHigh } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";

function BePartOfUs() {
  const JourneyCards = [
    {
      icon: <MdHealthAndSafety />,
      title: "Safety First",
      text: "Our trained team responds quickly to any medical emergency, ensuring our tourists’ safety and well-being.",
    },
    {
      icon: <FaSuitcase />,
      title: "What's Included?",
      text: "The package includes airport transfers, all meals, drinks, essential equipment, and a professional bilingual guide.",
    },
    {
      icon: <GiThreeLeaves />,
      title: "Eco-Conscious Travel",
      text: "We fish responsibly, gathering food only from authorized areas to protect the Amazon.",
    },
  ];

  const imagesCard = [
    "https://res.cloudinary.com/dbuxt1ti8/image/upload/v1755138303/tours/irvfiutfwc1vbfnhu0sk.jpg",
    "https://res.cloudinary.com/dbuxt1ti8/image/upload/v1755138303/tours/jwguy81xnrmj0twhipnl.jpg",
    "https://res.cloudinary.com/dbuxt1ti8/image/upload/v1755138165/tours/g8oaqgk1i8vmovghdj2f.jpg",
    "https://res.cloudinary.com/dbuxt1ti8/image/upload/v1755138164/tours/m4dwczfbbn3evjqdsei5.jpg",
  ];

  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);

  const toggleSound = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = !isMuted;

      setIsMuted(!isMuted);
    }
  };

  const buttonIcon = isMuted ? <IoMdVolumeOff /> : <IoIosVolumeHigh />;
  return (
    <section className={bePartOfUs.bePartOfUs_section}>
      <div className={bePartOfUs.video_container}>
        <video
          className={bePartOfUs.video}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          ref={videoRef}
        >
          <source
            src="https://res.cloudinary.com/dbuxt1ti8/video/upload/v1759535461/VID-20250509-WA0024_ddexeo.mp4"
            type="video/mp4"
          />
        </video>
        <button
          className={bePartOfUs.video_button_volume}
          onClick={toggleSound}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {buttonIcon}
        </button>
      </div>
      <div className={bePartOfUs.text_container}>
        <h2 className={bePartOfUs.text_title}>JOIN US ON THIS ADVENTURE</h2>
        <div className={bePartOfUs.images_container}>
          {imagesCard.map((image, index) => (
            <figure className={bePartOfUs.images_wrapper}>
              <img
                src={image}
                alt={`Image${index}`}
                className={bePartOfUs.images}
              />
            </figure>
          ))}
        </div>

        {/* <p className={bePartOfUs.text_paragraph}>
            Welcome to the most fascinating expeditions adventure, touring the
            beautiful city of Leticia, Amazonas Colombia and its surroundings; a
            cultural connector that borders Colombia with Brazil and Peru, home
            to the excellence of native indigenous communities, a nature with
            varied fauna, flora, water sources, folklore, gastronomy and
            traditions of three countries in the northernmost point of South
            America.
          </p> */}
      </div>
      <div className={bePartOfUs.carousel_container}>
        {JourneyCards.map((card, index) => (
          <div className={bePartOfUs.carousel_card_container} key={index}>
            <div className={bePartOfUs.carousel_card_wrapper}>
              <figure className={bePartOfUs.carousel_card_icon}>
                <span> {card.icon}</span>
              </figure>

              <h4 className={bePartOfUs.carousel_card_title}>{card.title}</h4>
              <p className={bePartOfUs.carousel_card_text}>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BePartOfUs;
