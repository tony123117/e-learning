import { motion } from "framer-motion";
import "../styles/Navbar.css";

import model from "../assets/model.png";
import small from "../assets/small.png";
import large from "../assets/large.png";

import Header from "../components/Header.jsx";

export default function Navbar() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        {/* FLOATING ICONS */}
        <motion.div
          className="icon yellow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          data-speed="4"
        >
          📷
        </motion.div>

        <motion.div
          className="icon green"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          data-speed="6"
        >
          💻
        </motion.div>

        <motion.div
          className="icon orange"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          data-speed="8"
        >
          📘
        </motion.div>

        <motion.div
          className="icon mint"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          data-speed="5"
        >
          🛡️
        </motion.div>

        <div className="Hero-section">
          {/* TEXT */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>Learn, Grow, Succeed</h1>

            <p>
              Are you in interested in learning a digital skill to sharpen your
              Knowledge and get you prepared for a skilled work career? Then
              Learn-X is your best bet.
            </p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <button className="get-started-btn">
                Get Started <span className="arrow">→</span>
              </button>
              <button className="learn-more-btn">Get Free Trial</button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <div className="stat">
                <span>10+</span>
                <p>Courses to choose from</p>
              </div>
              <div className="stat">
                <span>2700+</span>
                <p>Students Trained</p>
              </div>
              <div className="stat">
                <span>5k+</span>
                <p>Success Stories</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SMALL CIRCLE */}
        <motion.img
          src={small}
          className="small-circle"
          alt=""
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* IMAGES */}
        <motion.div
          className="hero-images"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="orbit">
            <span className="ball ball-1 icon" data-speed="2"></span>
            <span className="ball ball-2 icon" data-speed="3"></span>
            <span className="ball ball-3 icon" data-speed="1.5"></span>
            <span className="ball ball-4 icon" data-speed="2.5"></span>

            <img src={large} className="large-circle" alt="" />
          </div>

          <motion.img
            src={model}
            className="happy-student"
            alt=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

      </section>
    </>
  );
}
