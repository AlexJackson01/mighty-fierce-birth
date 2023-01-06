import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
import Banner1 from '../../assets/images/Banner1.png'
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-reveal'

const BannerButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: '#EC5EB1',
  color: 'white',
  padding: '10px 20px 10px 20px',
  fontSize: '20px',
  '&:hover': {
    backgroundColor: '#FABFE2',
    color: 'black'
  }
}))

export default function Banner () {
  return (
    <div>
      {/* <img src={BannerImg} className="banner-image" /> */}
      {/* <video loop autoPlay muted className="video">
            <source src={Video} type="video/mp4" />
        </video> */}
      <Fade right>
        <Grid container spacing={0}>
          <Grid
            item
            md={12}
            sx={{
              backgroundColor: 'black',
              padding: '50px',
              paddingTop: '-100px',
              paddingmarginBottom: '20px',
              backgroundImage: 'url(' + Banner1 + ')',
              backgroundSize: 'cover',
              width: '100%'
            }}
          >
            <div className='banner-text'>
              <h1 className='banner-text-1'>You deserve a</h1>
              <h1 className='banner-text-2'>positive birth</h1>
              <NavLink to='/about' style={{ textDecoration: 'none' }}>
                <BannerButton
                  variant='contained'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 auto',
                    justifyContent: 'center',
                    backgroundColor: '#EC5EB1',
                    textTransform: 'none',
                    fontFamily: 'League Spartan',
                    fontSize: '20px',
                    marginBottom: '20px'
                  }}
                >
                  Find out more
                </BannerButton>
              </NavLink>
            </div>
          </Grid>

          {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              backgroundColor: 'black',
              paddingmarginBottom: '20px',
              backgroundImage: 'url(' + Banner1 + ')',
              backgroundSize: 'cover',
              width: '100%'
            }}
          >
            <div>
              <img src={Banner1} className="banner-image" />
            </div>
          </Grid> */}
        </Grid>
      </Fade>
    </div>
  )
}
