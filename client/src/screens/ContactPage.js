import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Photo from '../assets/images/prosha2.jpg'
import Footer from '../components/Footer'
import Form from '../components/contact/Form'
import { Fade } from 'react-reveal'
import Socials from '../components/contact/Socials'

export default function ContactPage () {
  return (
    <div>
      <div className='contact-page'>
        <Fade bottom>
          <h1 className='about-header'>Contact</h1>
          <Grid container spacing={2} sx={{ paddingBottom: 3 }}>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={3} sx={{ padding: "30px", paddingBottom: 8.4, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={Photo}
                  alt='image of founder, Prosha and her daughter'
                  className='contact-image'
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Paper
                elevation={3}
                sx={{ padding: '30px', display: "flex", justifyContent: "center", alignItems: "center", height: 436 }}
              >
                <Socials />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ marginTop: "-8px", padding: '30px' }}>
                <Form />
              </Paper>
            </Grid>
          </Grid>
        </Fade>
      </div>
    </div>
  )
}
