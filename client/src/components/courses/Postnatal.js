import React from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

export default function Postnatal() {
  return (
    <div>
        {/* <h3 className='course-section'>Postnatal Course - £60</h3> */}
      <p>1.5 hour</p>

      <p>
      Our postnatal course is ideal if you’d like to find out more about the 4th trimester and what that may involve for you!
      </p>

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
        <a className="booking-link" href="https://forms.gle/o5PCszVBnj5yXZvJ7" target="_blank">Book a Postnatal Course</a>
        <ArrowBackIcon />
      </Button>
    </div>
  )
}
