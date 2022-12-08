import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Reviews from './components/Reviews';
import Affirmations from './components/Affirmations';
import Contact from './components/Contact';
import TandCs from './components/TermsConditions';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsConditions from './components/TermsConditions';


function App() {
  return (
    <div>
      <section>
        <Nav />
      </section>

      <section>
        <Banner />
      </section>

      <section>
        <Courses />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Reviews />
      </section>

      <section>
        <Affirmations />
      </section>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonials" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/t&cs" element={<TandCs />} />
      </Routes> */}
    </div>
  );
}

export default App;
