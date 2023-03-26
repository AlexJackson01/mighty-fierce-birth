import React, { useRef } from 'react'
import CourseBlurb from '../components/courses/CourseBlurb'
import PrivateFull from '../components/courses/PrivateFull'
import Extras from '../components/courses/Extras'
import { Fade } from 'react-reveal'
import { Grid } from '@mui/material'
import Selfie from '../assets/images/prosha1.jpg'
import Hypnobirthing from '../components/courses/HypnobirthingExpress'
import ComingSoon from '../components/courses/ComingSoon'
import Postnatal from '../components/courses/Postnatal'
import OneOffCall from '../components/courses/OneOffCall'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export default function CoursePage () {
  const privateRef = useRef()
  const hypnoRef = useRef()
  const postRef = useRef()
  const oneOffRef = useRef()

  const CourseButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    backgroundColor: '#EC5EB1',
    color: 'white',
    padding: '10px 20px 10px 20px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: '#FABFE2',
      color: 'black'
    }
  }))

  return (
    <div>
      <div className='courses-wrapper'>
        <div className='course-page-div'>
          <Fade bottom>
            <CourseBlurb />
            <div className='course-buttons-div'>
              <CourseButton
                variant='contained'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 auto',
                  justifyContent: 'center',
                  backgroundColor: '#EC5EB1',
                  textTransform: 'none',
                  fontFamily: 'League Spartan',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}
                className='course-button'
                onClick={() =>
                  privateRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Private Full Course
              </CourseButton>
              <CourseButton
                variant='contained'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 auto',
                  justifyContent: 'center',
                  backgroundColor: '#EC5EB1',
                  textTransform: 'none',
                  fontFamily: 'League Spartan',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}
                className='course-button'
                onClick={() =>
                  hypnoRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Hypnobirthing Express
              </CourseButton>
              <CourseButton
                variant='contained'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 auto',
                  justifyContent: 'center',
                  backgroundColor: '#EC5EB1',
                  textTransform: 'none',
                  fontFamily: 'League Spartan',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}
                className='course-button'
                onClick={() =>
                  postRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Postnatal
              </CourseButton>
              <CourseButton
                variant='contained'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 auto',
                  justifyContent: 'center',
                  backgroundColor: '#EC5EB1',
                  textTransform: 'none',
                  fontFamily: 'League Spartan',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}
                className='course-button'
                onClick={() =>
                  oneOffRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                One Off Call
              </CourseButton>
            </div>
            <h3 ref={privateRef} className='course-section'>
              Private Full Course - £350
            </h3>
            <PrivateFull />
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
              <Grid item xs={12} sm={12} md={12}>
                <ComingSoon />

                <h3 ref={hypnoRef} className='course-section'>
                  Hypnobirthing Express - £150
                </h3>
                <Hypnobirthing />

                <h3 ref={postRef} className='course-section'>
                  Postnatal Course - £60
                </h3>
                <Postnatal />

                <h3 ref={oneOffRef} className='course-section'>
                  One-Off Call - £50
                </h3>
                <OneOffCall />
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
    </div>
  )
}
