import React from 'react'
import Grid from '@mui/material/Grid'
import Private from '../../assets/images/PrivateFull.png'
import Express from '../../assets/images/Express.png'
import Postnatal from '../../assets/images/Postnatal.png'
import Call from '../../assets/images/Call.png'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { Box } from '@mui/system'

export default function Courses () {
  return (
    <div className=''>
      <Fade bottom>
        <h1 className='courses-header'>
          Find a Hypnobirthing course that suits you
        </h1>
        <div className='courses-wrapper'>
          <div className='courses-div'>
            <Grid
              container
              spacing={0}
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '20px'
              }}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap"}}>
                <Box
                  sx={{
                    height: '300px',
                    width: "300px",
                    backgroundImage: 'url(' + Private + ')',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <NavLink to='/courses' style={{ textDecoration: 'none' }}>
                    <div className='course-bg'>
                      <h1 className='course-text'>Private Full Course</h1>
                    </div>
                  </NavLink>
                </Box>
                <Box
                  sx={{
                    height: '300px',
                    width: "300px",
                    backgroundImage: 'url(' + Express + ')',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <NavLink to='/courses' style={{ textDecoration: 'none' }}>
                    <div className='course-bg'>
                      <h1 className='course-text'>Hypnobirthing Express</h1>
                    </div>
                  </NavLink>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} sx={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap"}}>
                <Box
                  sx={{
                    height: '300px',
                    width: "300px",
                    backgroundImage: 'url(' + Postnatal + ')',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <NavLink to='/courses' style={{ textDecoration: 'none' }}>
                    <div className='course-bg'>
                      <h1 className='course-text'>Postnatal</h1>
                    </div>
                  </NavLink>
                </Box>
                <Box
                  sx={{
                    height: '300px',
                    width: "300px",
                    backgroundImage: 'url(' + Call + ')',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <NavLink to='/courses' style={{ textDecoration: 'none' }}>
                    <div className='course-bg'>
                      <h1 className='course-text'>One Off Call</h1>
                    </div>
                  </NavLink>
                </Box>
              </Grid>
            </Grid>
            <p>Photos by <a href="https://instagram.com/shootingstar_fotografie?igshid=YmMyMTA2M2Y=" target="_blank">@shootingstar_fotographie</a></p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
