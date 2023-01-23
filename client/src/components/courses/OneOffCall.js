import React from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button'


export default function OneOffCall() {
  return (
    <div>
        {/* <h3 className='course-section'>One-Off Call - £50</h3> */}
      <p>1 hour call to discuss any topic you like! </p>
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
        <a className="booking-link" href="https://forms.gle/o5PCszVBnj5yXZvJ7" target="_blank">Book a One-Off Call</a>
        <ArrowBackIcon />
      </Button>
    </div>
  )
}
