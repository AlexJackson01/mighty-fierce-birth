import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import '@ptkdev/webcomponent-instagram-widget'
import Insta from '../../assets/images/Insta.png'
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-reveal'

export default function Instagram () {
  return (
    <div className=''>
      <Fade bottom>
        <h1 className='socials-header'>
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
        {/* <instagram-widget username="@mightyfiercebirth" grid="3x3"></instagram-widget>
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: "50px" }}>
            <InstagramEmbed url="https://www.instagram.com/p/CkmOn9cjvXs/"  />
            <InstagramEmbed url="https://www.instagram.com/p/CkmGxXfD3HN/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/Cj3jwdAq09w/" width={328} />
        </div> */}
      </Fade>
    </div>
  )
}
