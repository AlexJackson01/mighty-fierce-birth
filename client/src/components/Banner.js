import React from 'react';
import Video from '../assets/videos/Banner.mp4';
import Nav from '../components/Nav';

export default function Banner() {
  return (
    <div>
        <video loop autoPlay muted className="video">
            <source src={Video} type="video/mp4" />
        </video>
    </div> 
  )
}
