import React from 'react'
import Nav from '../components/Nav'
import { Fade } from 'react-reveal';
import Banner from '../assets/images/About-banner.png';
import Footer from '../components/Footer';

export default function AboutPage () {
  return (
    <div>
      {/* <Nav /> */}
      <Fade bottom>
        {/* <h1 className='about-header'>What is Hypnobirthing?</h1> */}
        <div className='about-wrapper'>
        <img src={Banner} alt="What is hypnobirthing banner" className="about-banner" />
        </div>
        <div className='about-pg-div'>
          <p>
            Hypnobirthing is a full-antenatal education course. It is better
            than any other birth-prep out there! It is evidence-based and
            science based, so not a bunch of woowoo. It takes you through
            everything from stages of labour, how the birth process works, birth
            partners role, pain relief, birth positions, induction, the 4th
            trimester and all other bits you’d expect to cover in an antenatal
            course.
          </p>
          <p>
            Hypnobirthing gives you the knowledge to take away but also teaches
            you the skills and tools to use when applying that knowledge. You
            will use these tools to aid your comfort levels and to have a clear
            calm mind. This includes things like breathing techniques, massage,
            the use of MP3s to aid your relaxation before and during each stage
            of labour.
          </p>
          <p>
            In our courses we cover the birth partner’s role so they are
            informed and confident when it comes to supporting you like you
            deserve.
          </p>
          <p>
            Hypnobirthing also covers your birthing hormones and teaches you
            about why they are so important. It teaches you about the scientific
            physical effects our mind has on our birthing bodies and why we feel
            the way we do - more important how we can change that mindset.
          </p>
        </div>
        <Footer />
      </Fade>
    </div>
  )
}
