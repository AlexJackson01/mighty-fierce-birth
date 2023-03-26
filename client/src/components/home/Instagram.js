import React from 'react'
import '@ptkdev/webcomponent-instagram-widget'
import Insta from '../../assets/images/Insta.png'
import { Fade } from 'react-reveal'

export default function Instagram () {
  return (
    <div className=''>
      <Fade bottom>
        <h1>
          Follow me:
          <br />
          @MightyFierceBirth
        </h1>
        <div>
          <a
            href='https://www.instagram.com/mightyfiercebirth/'
            target='_blank'
          >
            <img
              src={Insta}
              alt='Instagram feed - mighty fierce birth'
              className='feed'
            />
          </a>
        </div>
      </Fade>
    </div>
  )
}
