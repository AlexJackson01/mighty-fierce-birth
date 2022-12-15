import React from 'react'
import { NavLink, Link as ReactLink } from 'react-router-dom'
import Logo from '../assets/images/mighty-logo.png'
import Grid from '@mui/material/Grid'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { Fade } from 'react-reveal'

export default function Footer () {
  return (
    <Fade bottom>
      <div className='footer'>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={4}>
            <img src={Logo} alt='Mighty Fierce logo' />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <p>
              <a
                href='https://www.instagram.com/mightyfiercebirth/'
                target='_blank'
              >
                <InstagramIcon fontSize='large' sx={{ color: 'white' }} />
              </a>{' '}
              @mightyfiercebirth
            </p>
            <p>
              <a
                href='https://m.facebook.com/mightyfiercebirth/'
                target='_blank'
              >
                <FacebookIcon fontSize='large' sx={{ color: 'white' }} />
              </a>{' '}
              Mighty Fierce Birth
            </p>
            <p>
              <PhoneAndroidIcon fontSize='large' sx={{ color: 'white' }} />{' '}
              07519 954715
            </p>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <NavLink
              to='/t&cs'
              className='tcs-link'
              style={{
                color: 'white',
                fontFamily: 'League Spartan',
                listStyleType: 'none',
                fontSize: '20px',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <li className='tcs-link'>Terms & Conditions</li>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </Fade>
  )
}
