import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Testimonials.css"

import avatar1 from "../images/Avater1.png";
import avatar2 from "../images/Avater2.png";
import avatar3 from "../images/Avater3.png";
import avatar4 from "../images/Avater4.png";


const testimonials = [
  {
    name: "Tony Arum",
    image: avatar1,
    text:
      "I learnt so much during the duration of my course, the instructors are clear and concise. I can develop web app and websites thanks to LearnX.",
  },
  {
    name: "Kanayo Jennifer",
    image: avatar2,
    text:
      "The UI/UX courses are always engaging, making you think hard and deep for solutions. I am glad i am better than when i first got in thanks to LearnX program.",
  },
  {
    name: "Ogbonna Neslon",
    image: avatar3,
    text:
      "The program helped me understand CapCut and Canva. the instructor and study materials made everything easy, Highly Recommendable.",
  },
  {
    name: "Kosi Deborah",
    image: avatar4,
    text:
      "This program is amazing, i learn Ai machine and now i can apply it in my business and make more profit, i highly recommend this program.",
  },

  /* NEW TESTIMONIALS */

  {
    name: "Daniel Okorie",
    image: avatar1,
    text:
      "The front end development course helped me understand JavaScript properly. I can now build responsive websites on my own.",
  },
  {
    name: "NanaT Adebayo",
    image: avatar2,
    text:
      "Learning product design here changed my mindset completely. I now design with purpose and clarity.",
  },
  {
    name: "Smart Johnson",
    image: avatar3,
    text:
      "The instructors explain concepts in a very simple way. I was able to understand backend development without stress.",
  },
  {
    name: "Queen Peters",
    image: avatar4,
    text:
      "This platform is beginner friendly and very practical. I enjoyed every part of the learning experience.",
  },
  {
    name: "Fedrick Okorie",
    image: avatar1,
    text:
      "The data analysis course helped me understand real world data and how to draw insights from it.",
  },
  {
    name: "Ugochukwu Collins",
    image: avatar2,
    text:
      "I never thought learning tech could be this fun. The lessons are well structured and easy to follow.",
  },
  {
    name: "Zubby Musa",
    image: avatar3,
    text:
      "I joined with zero knowledge, but now I can confidently build websites and deploy them online.",
  },
  {
    name: "Jennifer Somto",
    image: avatar4,
    text:
      "The mentors are always supportive and ready to help. This made my learning journey smooth.",
  },
  {
    name: "Chimeremeze Olatunji",
    image: avatar1,
    text:
      "The backend course exposed me to APIs and databases in a very practical way. Highly recommended.",
  },
 


];


export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardWidth = 340;
  const gap = 32;

  return (
    <>
    <section className="testimonials">
      <span className="eyebrow">Testimonials</span>
      <h2>What Our Students Say ?</h2>

      {/* VIEWPORT */}
      <div className="carousel">
        <motion.div
          className="carousel-track"
          drag="x"
          dragConstraints={{
            left: -(testimonials.length - 1) * (cardWidth + gap),
            right: 0,
          }}
          animate={{ x: -(index * (cardWidth + gap)) }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              className={`testimonial-card ${
                i === 0 ? "highlight" : ""
              }`}
              key={i}
              whileHover={{ y: -6 }}
            >
              <div className="card-header">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <div className="stars">★★★★★</div>
                </div>
              </div>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>

    </>
  );
}
