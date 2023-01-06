import React from 'react'
import CourseAccordian from '../components/courses/CourseAccordian'
import CourseBlurb from '../components/courses/CourseBlurb'
import Extras from '../components/courses/Extras'
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
            <CourseBlurb />
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
                <Extras />
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>

      <Footer />
    </div>
  )
}
