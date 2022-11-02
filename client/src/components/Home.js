import React from 'react'
import Nav from './Nav';
import Video from '../videos/about-video.mp4';

export default function Home() {
  return (
    <div className="container">
        <div>
            <Nav />
        </div>
        <div className="about-wrap">
        <div className="about-me">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <video autoPlay muted className="about-video">
                        <source src={Video} />
                    </video>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Hi I’m Prosha, founder of Mighty Fierce Birth!</h4>
                    <p>I am a mum of one and a hypnobirthing enthusiast. I started Mighty Fierce Birth to to support others prepare for the positive birth they deserve and can have!</p>
                    <p>As someone who was always terrified and anxious about birth, I decided to do a hypnobirthing course to tackle some of these fears and educate myself further. My friend Jade at The Birth Uprising kindly offered me a private course. It was amazing and I was hooked from the beginning!</p>
                    <p>Hypnobirthing really changed how I thought about birth as I went from someone who was clueless, anxious and scared to someone who was calm, positive and ready! </p>
                    <p>Although my birth didn't go exactly to plan, I was prepared and calm throughout. I felt in control and I was able to have a drug-free birth like I had initially wanted. I believe this was all down to hypnobirthing! </p>
                </div>
            </div>
            <div className="row about">
                <h2>What is Hypnobirthing?</h2>
                <p>Hypnobirthing is a full-antenatal education course. It is better than any other birth-prep out there!</p>
            </div>
        </div>
        </div>
    </div>
  )
}
