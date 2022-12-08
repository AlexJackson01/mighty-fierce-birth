import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';


export default function Instagram() {
  return (
    <div className=''>
        <h1 className='socials-header'>Follow me:<br />
        @MightyFierceBirth</h1>
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: "50px" }}>
            {/* <InstagramEmbed url="https://www.instagram.com/p/CkmOn9cjvXs/"  /> */}
            {/* <InstagramEmbed url="https://www.instagram.com/p/CkmGxXfD3HN/" width={328} />
            <InstagramEmbed url="https://www.instagram.com/p/Cj3jwdAq09w/" width={328} /> */}
        </div>
    </div>
  )
}
