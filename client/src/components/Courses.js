import React from 'react';
import Grid from '@mui/material/Grid';
import Private from '../assets/images/PrivateFull.png';
import Express from '../assets/images/Express.png';
import Postnatal from '../assets/images/Postnatal.png';
import Call from '../assets/images/Call.png';

export default function Courses() {
  return (
    <div className="">
      <h1 className="courses-header">Find your Hypnobirthing course</h1>
      <div className="courses-wrapper">
        <div className="courses-div">
          <Grid container spacing={4} sx={{ justifyContent: "center", textAlign: "center" }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                 <img src={Private} alt="Avatar" className="course-options" />
                </div>
                <div class="flip-card-back">
                  <p>10+ hour course (in the comfort of your own home or online)</p>
                  <p>Weekly sessions, topics will cover everything from the science of birth, how your brain affects everything, your birth plans, your birth environment to learning the importance of your birth partner!</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                 <img src={Express} alt="Avatar" className="course-options" />
                </div>
                <div class="flip-card-back">
                  <p>4 hour course (online)</p>
                  <p>This is the ideal course if you are close to your due date or just want to refresh your memory!</p>
                  <p>Here are just some of the things the course covers!</p>
                  <ul>
                    <li>Changing your mindset about birth</li>
                    <li>Your birth partner's role</li>
                    <li>Your rights</li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                 <img src={Postnatal} alt="Avatar" className="course-options" />
                </div>
                <div class="flip-card-back">
                  <p>1.5 hour</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                 <img src={Call} alt="Avatar" className="course-options" />
                </div>
                <div class="flip-card-back">
                  <p>1 hour call to discuss any topic you like!</p>
                </div>
              </div>
            </div>
          </Grid>
          </Grid>
          {/* <ul className="course-list">
            <li>Private Full Course</li>
            <li>Hypnobirthing Express</li>
            <li>Postnatal</li>
            <li>One off call</li>
          </ul> */}
        </div>
      </div>        
    </div>
  )
}
