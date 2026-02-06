import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const container = {
  
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
   
  return (
    <motion.footer
      className="footer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* BRAND */}
        <motion.div className="footer-brand" variants={item}>
          <h2 className="footer-logo">
            <span className="logo-box">
              <motion.img
                src={logo}
                alt="LearnX Logo"
                className="logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </span>
            LearnX
          </h2>

          <p>
            At LearnX we are committed to success in everything we do. Therefore
            the success of our interns is paramount as it is also how we are
            perceived.
          </p>

          <div className="footer-contact">
            <span>📞 +234 814 012 0539</span>
            <span>✉ LearnX@LearnX.NG</span>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div className="footer-links" variants={item}>
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Contact Us</a>
          <a href="#">Career</a>
        </motion.div>

        {/* SUPPORT */}
        <motion.div className="footer-links" variants={item}>
          <h4>Support</h4>
          <a href="#">FAQs</a>
          <a href="#">Help Centre</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </motion.div>

        {/* SOCIALS */}
        <motion.div className="footer-socials" variants={item}>
          <h4>Socials</h4>
          <div className="social-icons">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="brand">LearnX</span>
        <span>© 2025 LearnX. All rights reserved</span>
      </motion.div>
    </motion.footer>
  );
}
