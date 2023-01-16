import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import { Divider } from '@mui/material'

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
        'In the comfort of your own home - I come to you! Depending on location and proximity to HA7'
    }
  ])
  return (
    <div className='course-info'>
      <h3 className='course-section'>Private Full Course - £350</h3>
      <p>10+ hour course</p>

      <p>
        In our weekly sessions, topics will cover everything from the science of
        birth, how your brain affects everything, your birth plans, your birth
        environment to learning the importance of your birth partner! We will
        discuss what happens immediately after birth and how to prepare.
      </p>

      <h3 className='course-section'>Choose from:</h3>

      <div className='course-cards'>
        {courses.map(course => (
          <div>
            <Card sx={{ width: 345, height: 550 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={require('../../assets/images/course-card.png')}
                title='pink lightning bolt icon'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div' sx={{ fontFamily: "League Spartan"}}>
                  {course.name}
                </Typography>
                <Typography variant='body2' color='text.secondary' sx={{fontFamily: "League Spartan"}}>
                  {course.details}
                </Typography>
              </CardContent>
              <CardActions>
                <BannerButton
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
                >
                  Book this course
                </BannerButton>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
