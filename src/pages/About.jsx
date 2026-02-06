import { motion } from "framer-motion";
import "../styles/About.css";
import man from "../assets/developer.png";
import woman from "../assets/bussineswoman.png";

export default function About() {
  return (
    <>
    
      <section className="about">
        {/* HEADER */}
        <motion.div
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Unlock your potential with LearnX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          LearnX, an initiative of SkillHub, it is a 6 months internship program
          designed to raise world class talents in the tech and innovation industry.
        </motion.p>

        {/* CONTENT */}
        <div className="about-section">
          {/* LEFT IMAGE */}
          <motion.div
            className="image left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={man} alt="Developer working" className="Developer" />
          </motion.div>

          {/* CARD */}
          <motion.div
            className="content-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>What we do</h2>
            <p>
              We primarily educate and groom software developers and designers,
              preparing them for the industry, with our flexible learning paths,
              interactive contents and user-friendly interface, we ensure that each
              client has the opportunity to thrive at their own pace.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="image right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={woman} alt="Woman with laptop" />
            <motion.button
              className="play-btn"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Play Demo <span className="icons">▶</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
