import FaqStyle from "../../styles/components/tourExpeditions/fqa.module.scss";

function Faq() {
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
      <div className={FaqStyle.question_container}>
        <div className={FaqStyle.question}>
          <h3>Question</h3>
        </div>
      </div>
    </div>
  );
}

export default Faq;
