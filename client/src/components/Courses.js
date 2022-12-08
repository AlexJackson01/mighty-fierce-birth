import React from 'react';
import Grid from '@mui/material/Grid';
import Private from '../assets/images/PrivateFull.png';
import Express from '../assets/images/Express.png';
import Postnatal from '../assets/images/Postnatal.png';
import Call from '../assets/images/Call.png';
import Online from '../assets/images/Online.png';
import Face from '../assets/images/FacetoFace.png';

export default function Courses() {
  return (
    <div className="">
      <h1 className="courses-header">Find your Hypnobirthing course</h1>
      <div className="courses-wrapper">
        <div className="courses-div">
        <div className="courses-info">
        <p>I offer a range of courses that will be suited to you at affordable prices. These courses are science and evidence based. They focus on the data and the facts!</p>
        <p>Participating in these courses will mean you receive a workbook as well as other useful resources to use during the course. It will also include other useful information / learning resources for after birth!</p>
        <p>Here are some details but feel free to get in touch with any questions or if you’d like something more flexible.</p>
      </div>
          <Grid container spacing={2} sx={{ justifyContent: "center", textAlign: "center", paddingBottom: "20px" }}>
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
          <Grid item xs={12} sm={6} md={4} lg={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3}>
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <img src={Online} alt="Full Group Online - coming soon" className="course-options" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img src={Face} alt="Full Group Face to Face - coming soon" className="course-options" />
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
