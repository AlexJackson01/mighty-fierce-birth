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
import Fade from 'react-reveal/Fade';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { alpha, styled } from '@mui/material/styles'


const ContactText = styled(TextField)({
  '& label.Mui-focused': {
    color: '#EC5EB1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#EC5EB1',
  },
});

export default function ContactPage () {
  return (
    <div>
    <div className='contact-page'>
          <h2>Contact</h2>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
        
      <Paper elevation={3} sx={{ padding: "50px", height: 490 }}>
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
        <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} sx={{ padding: "50px"}}>
        <form>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', paddingBottom: "20px" }}>
        <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <ContactText label="Name" name="user_name" variant="standard" size="normal"/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <EmailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <ContactText id="input-with-sx" label="Email address" name="user_email" variant="standard" />
      </Box>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, color: "black", display: "flex", justifyContent: "center", alignItems: 'center', paddingBottom: "20px",
      }}
      noValidate
      autoComplete="off"
    >    
      <div> 
        <ContactText
          id="standard-multiline-static"
          label="Message"
          name="user_message"
          multiline
          rows={4}
          variant="standard"
          sx={{color: "white"}}
        />
      </div>
    </Box>
      <p>
          <Button type="submit" variant="contained" size="large" sx={{textTransform: "none", fontSize: 20, fontFamily: "League Spartan", textAlign: "center", margin: "0 auto", display: "block", backgroundColor: "#EC5EB1", marginBottom: "20px",   '&:hover': {
    backgroundColor: '#FABFE2',
    color: 'black'
  }}}>
          Send
          </Button>
          </p>
        </form>
        </Paper>
        </Grid>
      </Grid>
      <img src={Photo} alt="image of founder, Prosha and her daughter" className="contact-image" />

    </div>
          <Footer />
</div>
  )
}
