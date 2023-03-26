import { Grid } from '@mui/material'
import React from 'react'
import { Fade } from 'react-reveal'
import Banner from '../assets/images/About-banner.png'
import Footer from '../components/Footer'
import Babies from '../assets/images/babies.png'
import { NavLink } from 'react-router-dom'

export default function AboutPage () {
  return (
    <div className='about-bg'>
      {/* <Nav /> */}
      <Fade bottom>
        <h1 className='about-header'>What is Hypnobirthing?</h1>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={Babies} alt='Photo of babies' className='babies-pic' />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div className='about-pg-div'>
              <p className='about-text'>
                Hypnobirthing is a full-antenatal education course. Despite the
                stigma surrounding Hypnobirthing, it’s actually based on
                evidence and science. I’ll take you through everything, from the
                stages of labour right up to the 4th trimester and all other
                topics you’d expect to cover in an antenatal course.
              </p>
              <p className='about-text'>
                Hypnobirthing gives you the knowledge to use long-term, and
                you’ll find yourself applying these skills in parenting and
                beyond. You’ll learn breathing techniques, massage, and how to
                utilize audio for relaxation during each stage of labour.
                Together we’ll explore your birth partner’s role so they’re
                informed and confident when it comes to giving you the support
                you deserve.
              </p>
              <p className='about-text'>
                Using scientific research, Hypnobirthing teaches you the
                importance of your birthing hormones. It highlights the physical
                effects that our mind has on our birthing bodies and why we feel
                the way we do - more important how we can channel into an
                empowered state of mind.
              </p>
              <p>Photos by <a href="https://instagram.com/shootingstar_fotografie?igshid=YmMyMTA2M2Y=" target="_blank">@shootingstar_fotographie</a></p>

            </div>
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}
