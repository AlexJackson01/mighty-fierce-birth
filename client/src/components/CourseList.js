import React from 'react';
import Grid from '@mui/material/Grid';
import Private from '../assets/images/PrivateFull.png';
import Express from '../assets/images/Express.png';
import Postnatal from '../assets/images/Postnatal.png';
import Call from '../assets/images/Call.png';
import Online from '../assets/images/Online.png';
import Face from '../assets/images/FacetoFace.png';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


export default function Courses() {
  return (
    <div className="">
      <Fade bottom>
      <h1 className="courses-header">Find a Hypnobirthing course that suits you</h1>
      <div className="courses-wrapper">
        <div className="courses-div">
          <Grid container spacing={2} sx={{ justifyContent: "center", textAlign: "center", paddingTop: "10px", paddingBottom: "20px" }}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
                <NavLink to="/courses"><img src={Private} alt="Private Full Course option" className="course-options" /></NavLink>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
                <NavLink to="/courses"><img src={Express} alt="Hypnobirthing Express course option" className="course-options" /></NavLink>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
                <NavLink to="/courses"><img src={Postnatal} alt="Postnatal course option" className="course-options" /></NavLink>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
                <NavLink to="/courses"><img src={Call} alt="One off call course option" className="course-options" /></NavLink>
          </Grid>
          </Grid>
        </div>
      </div>  
      </Fade>      
    </div>
  )
}
