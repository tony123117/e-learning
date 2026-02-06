import Header from "../components/Header";
import "../styles/Faqs.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Laptop from "../assets/laptop.png";
import Biglogo from "../assets/Big-Logo.png";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "Is learnX a paid internship?",
    answer:
      "Yes, LearnX is a paid internship program designed to equip you with practical skills and real-world experience.",
  },
  {
    question: "Can i make payments in installments?",
    answer:
      "Yes, installment payment options are available depending on the course you choose.",
  },
  {
    question: "Do i get a certificate at the end of the program?",
    answer:
      "Absolutely. You’ll receive a certificate upon successful completion of the program.",
  },
  {
    question: "Can i change my choice of course after registering?",
    answer:
      "Yes, course changes are allowed within a limited timeframe after registration.",
  },
  {
    question:
      "Can i get a job recommendation after my internship with learnX?",
    answer:
      "Top-performing interns may receive job recommendations or referrals.",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    
      <Header />

      {/* HERO */}
      <motion.div
        className="faqs-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={Laptop}
          alt="Laptop"
          className="Laptop"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          →
        </motion.a>
      </motion.div>

      {/* MAIN CONTENT */}
      <section className="faqs-container">
        {/* LEFT */}
        <motion.div
          className="faqs-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Frequently Asked Questions (FAQs)</h1>
          <p className="subtitle">
            Necessary questions answered. Everything you need to know about
            LearnX.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="arrow"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ⌄
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="faqs-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.img
            src={Biglogo}
            alt="LearnX Logo"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
