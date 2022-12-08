import React from 'react';
import Grid from '@mui/material/Grid';
import Video from '../assets/videos/Banner.mp4';
import Nav from '../components/Nav';
import BannerImg from '../assets/images/Banner.png';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import Banner1 from '../assets/images/Banner1.png';  
import { NavLink } from 'react-router-dom';


const BannerButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "#EC5EB1",
  color: "white",
  padding: "10px 20px 10px 20px",
  fontSize: "20px",
  '&:hover': {
    backgroundColor: "#FABFE2",
    color: "black" 
  },
}));


export default function Banner() {
  return (
    <div>
        {/* <img src={BannerImg} className="banner-image" /> */}
        {/* <video loop autoPlay muted className="video">
            <source src={Video} type="video/mp4" />
        </video> */}

        <Grid container spacing={0} >
          <Grid item xs={6} sm={6} md={6} sx={{ backgroundColor: "black", padding: "50px" }}>
            <div className="banner-text">
                <h1 className="banner-text-1">You deserve a</h1>
                <h1 className="banner-text-2">positive birth</h1>
                <NavLink to="/about" style={{ textDecoration: "none" }}>
                <BannerButton variant="contained" sx={{ display: "flex", alignItems: "center", margin: "0 auto", justifyContent: "center", backgroundColor: "#EC5EB1", textTransform: "none", fontFamily: "League Spartan", fontSize: "20px", marginBottom: "20px"}}>Find out more</BannerButton>
                </NavLink>
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={6} sx={{ backgroundColor: "black", paddingmarginBottom: "20px", backgroundImage: "url(" + Banner1 + ")", backgroundSize: "cover", width: "100%" }}>
          <div className="banner-image">
              adfsd
          </div>
          </Grid>
        </Grid>

        {/* <Grid container spacing={4}>
            <Grid item xs={6} sx={{   position: "absolute", top: "70%", left: "24%",  transform: "translate(-50%, -50%)" }}>
            <BannerButton variant="contained" sx={{ backgroundColor: "#EC5EB1", textTransform: "none", fontFamily: "League Spartan", fontSize: "20px"}}>Find out more</BannerButton>
            </Grid>
        </Grid> */}
    </div> 
  )
}
