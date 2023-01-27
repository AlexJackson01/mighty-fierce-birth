import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import { Divider } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import StarIcon from '@mui/icons-material/Star'

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

export default function HypnobirthingExpress () {
  const [courses, setCourses] = useState([
    { name: 'Online Course', details: '£150' },
    {
      name: 'Home Course',
      details:
        'Learn the full-course in the comfort of your own home. Dependant on your location, I generally cover North London and South Hertfordshire, please get in contact to discuss further!'
    }
  ])
  return (
    <div className='course-info'>
      {/* <h3 className='course-section'>Hypnobirthing Express - £150</h3> */}
      <p>4 hour course (online)</p>

      <p>
        This course is ideal if you’re close to your due date, or to help you
        start your birth journey. We’ll look into the key tools for
        hypnobirthing, so you can feel more confident giving birth!
      </p>

      <p>You'll receive:</p>

      <p>
        <StarIcon /> 4 hours of one-on-one training
      </p>

      <p>
        <StarIcon /> A workbook and resources
      </p>

      <p>
        <StarIcon /> All the extras for post-partum
      </p>

      <p>
        <StarIcon /> Hypnobirthing MP3s
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
          Book an Express Course
        </a>
        <ArrowBackIcon />
      </Button>
    </div>
  )
}
