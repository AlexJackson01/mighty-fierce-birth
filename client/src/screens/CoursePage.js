import React from 'react'
import Nav from '../components/Nav'
import CourseAccordian from '../components/CourseAccordian'
import { Fade } from 'react-reveal'
import Footer from '../components/Footer'
import { Grid } from '@mui/material'
import Selfie from '../assets/images/prosha1.jpg'

export default function CoursePage () {
  return (
    <div>
      {/* <Nav /> */}
      <div className='courses-wrapper'>
        <div className='course-page-div'>
          <Fade bottom>
            <div className='course-info'>
              <h1 className='about-header'>My Courses</h1>

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
            <CourseAccordian />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6}>
                <div className='selfie-div'>
                  <img
                    src={Selfie}
                    alt='Prosha holding her baby'
                    className='selfie'
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <h1 className='extras-header'>
                  YOU GET SO MANY OTHER EXTRAS WHEN YOU BOOK A COURSE WITH ME!
                </h1>
                <div className='extras-div'>
                  <p>
                    - My continued support throughout your pregnancy and course
                    via WhatsApp!
                  </p>
                  <p>- A goody bag with some surprise freebies</p>
                  <p>
                    - Online resources which includes a full workbook to use
                    throughout your pregnancy
                  </p>
                  <p>
                    - Other resources you will receive include pre-recorded
                    videos about breastfeeding, sling baby wearing, baby massage
                    and intro to starting solids
                  </p>
                </div>
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>

      <Footer />
    </div>
  )
}
