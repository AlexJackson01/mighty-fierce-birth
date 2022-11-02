import './App.css';
import Home from './components/Home';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonials" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
