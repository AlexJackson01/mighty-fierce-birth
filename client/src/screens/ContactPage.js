import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Photo from '../assets/images/prosha2.jpg'
import Footer from '../components/Footer'
import Form from '../components/Form'
import { Fade } from 'react-reveal'
import Socials from '../components/Socials'

export default function ContactPage () {
  return (
    <div>
      <div className='contact-page'>
        <Fade bottom>
          <h2>Contact</h2>
          <Grid container spacing={2} sx={{ paddingBottom: 3 }}>
            <Grid item xs={12} sm={6} md={6}>
              <Paper elevation={3} sx={{ padding: '50px', height: 520 }}>
                <img
                  src={Photo}
                  alt='image of founder, Prosha and her daughter'
                  className='contact-image'
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Paper
                elevation={3}
                sx={{ padding: '50px', paddingTop: 15, height: 520 }}
              >
                <Socials />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: '50px' }}>
                <Form />
              </Paper>
            </Grid>
          </Grid>
        </Fade>
      </div>
      <Footer />
    </div>
  )
}
