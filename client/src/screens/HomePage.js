import React from 'react'
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Courses from '../components/CourseList';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Affirmations from '../components/Affirmations';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import Video from '../assets/videos/about-video.mp4';

export default function Home() {
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

      <section>
        <Instagram />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}
