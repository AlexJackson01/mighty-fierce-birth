import React from 'react'
import Grid from '@mui/material/Grid'
import Flower from '../../assets/images/flower.png'
import { Fade } from 'react-reveal'

export default function Affirmations () {
  return (
    <Fade bottom>
      <div className='affirmations-section'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <h1 className='affirmation'>
              Your courage is stronger than your fear
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* <button className="affirm-button">
                    <p>Click here for</p>
                    <p className="button-text">printable affirmations</p>
                    </button> */}
            <img src={Flower} className='flower' />
          </Grid>
        </Grid>
      </div>
    </Fade>
  )
}
