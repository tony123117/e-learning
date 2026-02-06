import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Subscribe.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // simulate successful subscription
    setSuccess(true);
    setEmail("");

    // hide success message after 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    
    <motion.section
      className="subscribe"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1>Subscribe for LearnX updates</motion.h1>

      <motion.p>
        Join our mailing list to receive information about our work and new learning opportunities.
      </motion.p>

      <motion.form
        className="subscribe-form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <motion.button
          type="submit"
          className="Buttons"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.form>

      {success && (
        <motion.p
          className="success-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ You’ve successfully subscribed!
        </motion.p>
      )}
    </motion.section>
  );
}
