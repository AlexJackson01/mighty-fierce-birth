import React from 'react'
import Nav from '../components/Nav'
import CourseAccordian from '../components/CourseAccordian'
import { Fade } from 'react-reveal'

export default function CoursePage () {
  return (
    <div>
      {/* <Nav /> */}
      <div className='courses-wrapper'>
        <div className='course-page-div'>
          <Fade bottom>
            <div className='course-info'>
              <p>
                I offer a range of courses that will be suited to you at
                affordable prices. These courses are science and evidence based.
                They focus on the data and the facts!
              </p>

              <p>
                Participating in these courses will mean you receive a workbook
                as well as other useful resources to use during the course. It
                will also include other useful information / learning resources
                for after birth!
              </p>

              <p>
                Here are some details but feel free to get in touch with any
                questions or if you’d like something more flexible.
              </p>
            </div>
          </Fade>
          <CourseAccordian />
        </div>
      </div>
    </div>
  )
}
