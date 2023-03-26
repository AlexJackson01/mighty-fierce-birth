import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const BannerButton = styled(Button)(({ theme }) => ({
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

export default function PrivateFull () {
  const [courses, setCourses] = useState([
    { name: 'Online Course', details: '£350' },
    {
      name: 'Home Course',
      details:
        'Learn the full-course in the comfort of your own home. Dependent on your location, I generally cover North London and South Hertfordshire. Please get in contact to discuss further!'
    }
  ])
  return (
    <div className='course-info'>
      {/* <h3 className='course-section'>Private Full Course - £350</h3> */}
      <p>10+ hour course</p>

      <p>
        Our weekly topics cover everything from the science of birth and how
        your brain affects everything, to your birth plans and your birthing
        environment! One-to-one we’ll discuss how to prepare and what happens
        immediately after giving birth. You’ll also receive all the extras that
        I offer for post-partum, which includes information on breastfeeding and
        weaning. Please feel free to involve your birthing partner in all or
        some sessions, as they play an important role in your journey.
      </p>

      <h4 className='course-section'>Choose from:</h4>

      <div className='course-cards'>
        {courses.map(course => (
          <div>
            <Card elevation={0} sx={{ width: 345, height: 300 }}>
              <CardMedia sx={{ height: 100 }}>
                <FlashOnIcon sx={{ fontSize: 100, color: '#EC5EB1' }} />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ fontFamily: 'League Spartan' }}
                >
                  {course.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ fontFamily: 'League Spartan' }}
                >
                  {course.details}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        ))}
      </div>
      <Button
        variant='text'
        sx={{
          textTransform: 'none',
          color: '#EC5EB1',
          fontSize: 20,
          fontFamily: 'League Spartan',
          marginBottom: 10
        }}
      >
        <ArrowForwardIcon />
        <a
          className='booking-link'
          href='https://forms.gle/o5PCszVBnj5yXZvJ7'
          target='_blank'
        >
          Book a Private Full Course
        </a>
        <ArrowBackIcon />
      </Button>
    </div>
  )
}
