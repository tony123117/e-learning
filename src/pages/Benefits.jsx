import { motion } from 'framer-motion';
import '../styles/Benefits.css';

import person from '../assets/person.png';
import blob from '../assets/blob.png';

import fill from '../images/fill.png';
import icons from '../images/icons.png';
import reader from '../images/reader.png';
import vector from '../images/Vector.png';
import wallet from '../images/wallet.png';
import clone from '../images/person-clone.png';

const benefits = [
    {
        title: 'Expert Instructors',
        text: 'Learn from industry experts dedicated to your success.',
        icon: fill
    },
    {
        title: 'Flexible Schedule',
        text: 'Learn at your own pace with flexible scheduling.',
        icon: icons
    },
    {
        title: 'Certification',
        text: 'Earn a recognized certificate upon course completion.',
        icon: reader
    },
    {
        title: 'Engaging Sessions',
        text: 'Having study sessions that are engaging and concise.',
        icon: vector
    },
    {
        title: 'Affordability',
        text: 'Learn at an affordable price to pursue your career goals.',
        icon: wallet
    }
];

export default function WhyChoose() {
    return (
        
        <section className="why">
            <motion.div
                className="why-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <span className="why-eyebrow">Why choose us</span>
                <h2 className="why-title">Benefits of choosing LearnX</h2>
                <p className="why-subtitle">
                    With LearnX you get the best of academic minds and quality learning at its
                    peak and so much more.
                </p>

                <div className="why-grid">
                    {/* LEFT */}
                    <motion.div
                        className="why-image"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img src={blob} alt="" className="blob" />

                            <div className="person-wrap">
                            <div className="person-bottom">
                                <img src={clone} alt="" />
                            </div>

                            <img src={person} alt="Student" className="person" />
                            </div>


                    </motion.div>

                    {/* RIGHT */}
                    <div className="why-benefits">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="benefit-card"
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <div className="benefit-icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
