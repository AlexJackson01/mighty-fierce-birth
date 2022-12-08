import React from 'react';
import Grid from '@mui/material/Grid';
import Video from '../assets/videos/about-video.mp4';



export default function Reviews() {
  return (
    <div className="reviews-section">
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5}>
                <h1 className='reviews-h1'>Find out what others have said about MFB</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <div className="reviews-wrapper">
                    <div className="reviews-div">
                        Reviews here
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
