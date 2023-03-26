import React from 'react'
import Banner from '../components/home/Banner'
import Courses from '../components/courses/CourseList'
import About from '../components/home/About'
import Reviews from '../components/home/Reviews'
import Affirmations from '../components/home/Affirmations'
import Instagram from '../components/home/Instagram'

export default function Home () {
  return (
    <div>
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
    </div>
  )
}
