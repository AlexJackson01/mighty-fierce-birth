import React from 'react';
import Grid from '@mui/material/Grid';
import Video from '../assets/videos/about-video.mp4';



export default function Reviews() {
  return (
    <div className="reviews-section">
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
                <h1>Find out what others have said about MFB</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <h4>Hi I’m Prosha, founder of Mighty Fierce Birth!</h4>
                <div className="about-div">
                    <p>I am a mum of one and a hypnobirthing enthusiast. I started Mighty Fierce Birth to to support others prepare for the positive birth they deserve and can have!</p>
                    <p>As someone who was always terrified and anxious about birth, I decided to do a hypnobirthing course to tackle some of these fears and educate myself further. My friend Jade at The Birth Uprising kindly offered me a private course. It was amazing and I was hooked from the beginning!</p>
                    <p>Hypnobirthing really changed how I thought about birth as I went from someone who was clueless, anxious and scared to someone who was calm, positive and ready!</p>
                    <p>Although my birth didn't go exactly to plan, I was prepared and calm throughout. I felt in control and I was able to have a drug-free birth like I had initially wanted. I believe this was all down to hypnobirthing!</p>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
