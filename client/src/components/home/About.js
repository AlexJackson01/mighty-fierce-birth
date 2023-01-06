import React from 'react'
import Grid from '@mui/material/Grid'
import Prosha from "../../assets/images/prosha3.png"
// import Video from '../../assets/videos/about-video.mp4'
import { Fade } from 'react-reveal'

export default function About () {
  return (
    <div className='about-section'>
      <Fade bottom>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src={Prosha} alt="MFB founder, Prosha" className='about-photo' />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <h1 className='about-h1'>
          Hi I’m Prosha, founder of Mighty Fierce Birth!
        </h1>
            <div className='about-div'>

              <p>
                I am a mum of one and a hypnobirthing enthusiast. I started
                Mighty Fierce Birth to to support others prepare for the
                positive birth they deserve and can have!
              </p>
              <p>
                As someone who was always terrified and anxious about birth, I
                decided to do a hypnobirthing course to tackle some of these
                fears and educate myself further. My friend Jade at The Birth
                Uprising kindly offered me a private course. It was amazing and
                I was hooked from the beginning!
              </p>
              <p>
                Hypnobirthing really changed how I thought about birth as I went
                from someone who was clueless, anxious and scared to someone who
                was calm, positive and ready!
              </p>
              <p>
                Although my birth didn't go exactly to plan, I was prepared and
                calm throughout. I felt in control and I was able to have a
                drug-free birth like I had initially wanted. I believe this was
                all down to hypnobirthing!
              </p>
            </div>
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}
