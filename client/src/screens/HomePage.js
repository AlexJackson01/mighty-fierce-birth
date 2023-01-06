import React from 'react'
import Banner from '../components/home/Banner'
import Courses from '../components/courses/CourseList'
import About from '../components/home/About'
import Reviews from '../components/home/Reviews'
import Affirmations from '../components/home/Affirmations'
import Instagram from '../components/home/Instagram'
import Footer from '../components/Footer'
import Video from '../assets/videos/about-video.mp4'

export default function Home () {
  return (
    <div>
      {/* <section>
        <Nav />
      </section> */}

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

      {/* <section>
        <Footer />
      </section> */}
    </div>
  )
}
