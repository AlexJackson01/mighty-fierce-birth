import React from 'react';
import Video from '../assets/videos/Banner.mp4';
import Nav from '../components/Nav';
import BannerImg from '../assets/images/Banner.png';

export default function Banner() {
  return (
    <div>
        <img src={BannerImg} className="banner-image" />
        {/* <video loop autoPlay muted className="video">
            <source src={Video} type="video/mp4" />
        </video> */}
    </div> 
  )
}
