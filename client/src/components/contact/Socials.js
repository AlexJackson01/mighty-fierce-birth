import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

export default function Socials () {
  return (
    <div className='socials'>
      <p>
        If you want to get in touch with me about my courses or Hypnobirthing in
        general, please fill in the contact form here or use my details below!
      </p>
      <p>
        <a href='https://www.instagram.com/mightyfiercebirth/' target='_blank'>
          <InstagramIcon fontSize='large' sx={{ color: 'black' }} />
        </a>{' '}
        @mightyfiercebirth
      </p>
      <p>
        <a href='https://m.facebook.com/mightyfiercebirth/' target='_blank'>
          <FacebookIcon fontSize='large' sx={{ color: 'black' }} />
        </a>{' '}
        Mighty Fierce Birth
      </p>
      <p>
        <PhoneAndroidIcon fontSize='large' sx={{ color: 'black' }} /> 07519
        954715
      </p>
    </div>
  )
}
