import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Home from './screens/HomePage';
import Courses from './screens/CoursePage';
import About from './screens/AboutPage';
import Reviews from './components/Reviews';
import Affirmations from './components/Affirmations';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import TandCs from './components/TermsConditions';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsConditions from './components/TermsConditions';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/t&cs" element={<TandCs />} />
      </Routes>
    </div>
  );
}

export default App;
