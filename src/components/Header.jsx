import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔑 Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-box" />
          <span className="logo-text">LEARN-X</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links desktop">
          <a href="#about">About us</a>
          <a href="#courses">Courses</a>
          <a href="#testimonials">Testimonial</a>
          <Link to="/faqs">FAQs</Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="actions desktop">
          <button className="login-btn">Login</button>
          <button className="register-btn">
            Register <span className="arrow">→</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
            <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonial</a>

            {/* ✅ ROUTE */}
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>
              FAQs
            </Link>

            <div className="mobile-actions">
              <button className="login-btn">Login</button>
              <button className="register-btn">
                Register <span className="arrow">→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
