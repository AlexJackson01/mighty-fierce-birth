import { Grid } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'
import Babies from '../assets/images/babies.png'
import Blurb from '../components/about/Blurb'

export default function AboutPage () {
  return (
    <div className='about-bg'>
      <Fade bottom>
        <h1 className='about-header'>What is Hypnobirthing?</h1>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={Babies} alt='babies' className='babies-pic' />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Blurb />
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}
