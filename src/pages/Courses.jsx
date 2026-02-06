
import "../styles/Courses.css";
import { motion } from "framer-motion";

import productdesign from "../assets/Product-design.png";
import frontend from "../assets/Front-end-development.png";
import backend from "../assets/Backend-development.png";
import dataanalysis from "../assets/Data-Analysis.png";
import aiml from "../assets/ai-ml.png";

const courses = [
  {
    title: "Product Design",
    description:
      "Learn to transform ideas into digital solutions with good aesthetics",
    image: productdesign,
  },
  {
    title: "Front End Development",
    description:
      "Learn Javascript, HTML, CSS etc to develop amazing websites",
    image: frontend,
  },
  {
    title: "Back End Development",
    description:
      "Learn Design patterns, API's, OOP and advanced topics for web development",
    image: backend,
  },
  {
    title: "Data Analysis",
    description:
      "Learn to use statistics and data visualization to make real world impact",
    image: dataanalysis,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Learn to use data into computer programs that form realistic figures",
    image: aiml,
  },
];

/* Animation variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Courses() {
  return (
    
    <>
    
      {/* HEADER */}
      <motion.section
        className="courses-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Explore our <span>courses</span>
        </h2>
        <p>
          We offer the best trending courses for training individuals in search of a
          digital skill that are currently in demand.
        </p>
      </motion.section>

      {/* COURSES */}
      <motion.section
        className="courses"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {courses.slice(0, 3).map((course, index) => (
          <motion.div
            className="course-card"
            variants={card}
            key={index}
          >
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href="#">
              View more <span>→</span>
            </a>
          </motion.div>
        ))}

        <motion.div className="courses-bottom" variants={container}>
          {courses.slice(3).map((course, index) => (
            <motion.div
              className="course-card"
              variants={card}
              key={index}
            >
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <a href="#">
                View more <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
