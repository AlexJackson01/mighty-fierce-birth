import './App.css';
import Home from './components/Home';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
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
        <Route path="/testimonials" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/t&cs" element={<TandCs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
