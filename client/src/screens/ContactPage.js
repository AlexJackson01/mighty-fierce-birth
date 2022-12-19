import React from 'react'
import Nav from '../components/Nav'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Photo from '../assets/images/prosha2.jpg';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { alpha, styled } from '@mui/material/styles';
import Form from '../components/Form';
import { Fade } from 'react-reveal'


export default function ContactPage () {
  return (
    <div>
      <Fade bottom>
    <div className='contact-page'>
          <h2>Contact</h2>
      <Grid container spacing={2} sx={{ paddingBottom: 3 }}>
          <Grid item xs={12} sm={6} md={6}>
        
      <Paper elevation={3} sx={{ padding: "50px", height: 520 }}>
      <img src={Photo} alt="image of founder, Prosha and her daughter" className="contact-image" />
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} sx={{ padding: "50px", paddingTop: 15, height: 520 }}>

        <div className='socials'>
        <p>If you want to get in touch with me about my courses or Hypnobirthing in general, please fill in the contact form here or use my details below!</p>
        <p>
              <a
                href='https://www.instagram.com/mightyfiercebirth/'
                target='_blank'
              >
                <InstagramIcon fontSize='large' sx={{ color: 'black' }} />
              </a>{' '}
              @mightyfiercebirth
            </p>
            <p>
              <a
                href='https://m.facebook.com/mightyfiercebirth/'
                target='_blank'
              >
                <FacebookIcon fontSize='large' sx={{ color: 'black' }} />
              </a>{' '}
              Mighty Fierce Birth
            </p>
            <p>
              <PhoneAndroidIcon fontSize='large' sx={{ color: 'black' }} />{' '}
              07519 954715
            </p>
        </div>
        </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={12}>
      <Paper elevation={3} sx={{ padding: "50px"}}>
          <Form />
        </Paper>
</Grid>
</Grid>

    </div>
          <Footer />
          </Fade>
</div>
  )
}
