import './App.css'
import Navbar from './pages/Navbar';
import About from './pages/About';
import Courses from './pages/Courses';

import Benefits from './pages/Benefits';
import Testimonials from './pages/Testimonials';

import Subscribe from './pages/Subscribe';
import Footer from './components/Footer'






function App() {
  return (
    <>
      <Navbar />

      <section id="about">
        <About />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      

      <Subscribe />
      <Footer />




    </>
  );
}



export default App
