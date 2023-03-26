import React from 'react'
import Grid from '@mui/material/Grid'
import Prosha from '../../assets/images/prosha3.png'
import { Fade } from 'react-reveal'

export default function About () {
  return (
    <div className='about-section'>
      <Fade bottom>
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
            <img
              src={Prosha}
              alt='MFB founder, Prosha'
              className='about-photo'
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h1 className='about-h1'>
              Hi I’m Prosha, founder of Mighty Fierce Birth!
            </h1>
            <div className='about-div'>
              <p>
                I’m a toddler Mum and a hypnobirthing enthusiast! I became an
                instructor as I wholeheartedly believe in the practice, having
                trained and successfully used it myself. Now I’d love to share
                this knowledge with you in preparation for the positive birth
                that you deserve!
              </p>
              <p>
                As someone who was always terrified and anxious about birth, I
                decided to do a hypnobirthing course to tackle some of these
                fears and gain a different perspective. Jade at The Birth
                Uprising kindly offered me a private course and It was amazing!
                I felt hooked from the very beginning.
              </p>
              <p>
                Hypnobirthing completely changed my perception of labour. I went
                from being clueless, anxious and scared, to calm, positive and
                ready! And although my birth didn't go exactly to plan, I felt
                empowered throughout the whole journey. Thankfully I was able to
                have a drug-free birth as I wished and I genuinely believe this
                was all down to hypnobirthing!
              </p>
            </div>
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}
