import React from 'react';
import Nav from '../components/Nav';
import { Fade } from 'react-reveal';

export default function AboutPage() {
  return (
    <div>
        {/* <Nav /> */}
        <Fade bottom>
            <h1 className='about-header'>What is Hypnobirthing?</h1>
            <div className='about-pg-div'>
                <p>Hypnobirthing is a full-antenatal education course. It is better than any other birth-prep out there! It is evidence-based and science based, so not a bunch of woowoo.</p>
            </div>
        </Fade>
    </div>
  )
}
