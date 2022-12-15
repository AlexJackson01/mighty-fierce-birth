import React from 'react'
import Nav from './Nav'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

export default function Contact () {
  return (
    <div className='container'>
      <div>
        <Nav />
      </div>
      <div className='about-wrap'>
        <div className='about-me'>
          <h2>Contact</h2>
          <div className='socials'>
            <p>
              <a
                href='https://www.instagram.com/mightyfiercebirth/'
                target='_blank'
              >
                <InstagramIcon fontSize='large' sx={{ color: '#ec5eb1' }} />
              </a>{' '}
              @mightyfiercebirth
            </p>
            <p>
              <a
                href='https://m.facebook.com/mightyfiercebirth/'
                target='_blank'
              >
                <FacebookIcon fontSize='large' sx={{ color: '#ec5eb1' }} />
              </a>{' '}
              Mighty Fierce Birth
            </p>
            <p>
              <PhoneAndroidIcon fontSize='large' sx={{ color: '#ec5eb1' }} />{' '}
              07519 954715
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
