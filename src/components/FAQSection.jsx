
import { useState } from "react";
import { FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function FAQSection() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: t("faq", "q1"),
      answer: t("faq", "a1"),
    },
    {
      question: t("faq", "q2"),
      answer: t("faq", "a2"),
    },
    {
      question: t("faq", "q3"),
      answer: t("faq", "a3"),
    },
  ];

  return (
    <section className="faq-section" id="faq" dir={ar ? "rtl" : "ltr"}>
      <div className="faq-container">

        <div className="faq-header">
          <span className="faq-subtitle">
            {t("faq", "subtitle")}
          </span>

          <h2>{t("faq", "title")}</h2>

          <p>{t("faq", "description")}</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`faq-answer ${isOpen ? "open" : ""}`}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-footer">
          <p>{t("faq", "footerText")}</p>

          <a href="#contact" className="faq-contact-btn">
            {t("faq", "contactBtn")}
            <FaArrowLeft />
          </a>
        </div>

      </div>
    </section>
  );
}
