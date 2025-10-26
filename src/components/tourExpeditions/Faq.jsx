import { useState } from "react";
import FaqStyle from "../../styles/components/tourExpeditions/fqa.module.scss";
import { IoIosArrowDown } from "react-icons/io";

function Faq() {
  const questions = [
    {
      question: "Can I pay in US dollars or with a card at the agency?",
      answer:
        "No, all remaining balances must be paid in cash in Colombian Pesos (COP) at our office. Make sure to exchange currency before arriving in Leticia, as card services are limited in the Amazon.",
    },
    {
      question: "Is airport pickup and drop-off included?",
      answer:
        "Yes! Airport transfers are included in your tour package at no extra cost. Our team will greet you upon arrival.",
    },
    {
      question: "Is the Yellow Fever Vaccination Card required?",
      answer:
        "Yes. For your safety and in accordance with local health regulations, a Yellow Fever vaccination card is mandatory. We highly recommend getting vaccinated at least 10 days before travel.",
    },
    {
      question: "What should I pack for the tour?",
      answer:
        "No, all remaining balances must be paid in cash in Colombian Pesos (COP) at our office. Make sure to exchange currency before arriving in Leticia, as card services are limited in the Amazon.",
    },
    {
      question: "Can I pay in US dollars or with a card at the agency?",
      answer:
        "No, all remaining balances must be paid in cash in Colombian Pesos (COP) at our office. Make sure to exchange currency before arriving in Leticia, as card services are limited in the Amazon.",
    },
    {
      question: "Can I pay in US dollars or with a card at the agency?",
      answer:
        "No, all remaining balances must be paid in cash in Colombian Pesos (COP) at our office. Make sure to exchange currency before arriving in Leticia, as card services are limited in the Amazon.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={FaqStyle.container}>
      <div className={FaqStyle.text_container}>
        <h1 className={FaqStyle.text_title}>
          Expeditions George of the Jungle – FAQ
        </h1>
        <p className={FaqStyle.text_description}>
          We’re here to help you. Contact us anytime. Ready to explore the
          Amazon? Secure your spot with a 30% deposit today!
        </p>
        <hr className={FaqStyle.hr} />
      </div>
      <div>
        {questions.map((item, index) => (
          <div className={FaqStyle.question_container} key={index}>
            <div className={FaqStyle.question}>
              <div
                className={FaqStyle.question_closed}
                onClick={() => toggle(index)}
              >
                <h3 className={FaqStyle.question_title}>{item.question}</h3>
                <IoIosArrowDown
                  className={openIndex === index ? FaqStyle.rotate : ""}
                />
              </div>

              {openIndex === index && (
                <div className={FaqStyle.question_open}>
                  <hr className={FaqStyle.question_hr} />
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
