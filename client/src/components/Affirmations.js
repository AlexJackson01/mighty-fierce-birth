import React from 'react';
import Grid from '@mui/material/Grid';
import Video from '../assets/videos/about-video.mp4';
import Flower from '../assets/images/flower.png';



export default function Affirmations() {
  return (
    <div className="affirmations-section">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <h1 className="affirmation">Your courage is stronger than your fear</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                {/* <button className="affirm-button">
                    <p>Click here for</p>
                    <p className="button-text">printable affirmations</p>
                    </button> */}
                <img src={Flower} className="flower" />
            </Grid>
        </Grid>
    </div>
  )
}
