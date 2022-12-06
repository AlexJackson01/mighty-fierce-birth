import React from 'react';
import Nav from './Nav';
import Strike from '../images/lightning.png';

export default function Reviews() {
  return (
<div className="container socials">
        <div>
            <Nav />
        </div>
        <div className="about-wrap">
        <div className="about-me">
            <h2>Testimonials</h2> 

            <div className="row review">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src={Strike} className="strike" alt="lightning strike" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p>"Hypnobirthing transformed my labour and birth from what could have been a stressful or scary event, into one that was actually quite magical. Mystical even. The knowledge and techniques I learnt enabled me to feel empowered and aware of what my body was doing throughout. Lastly, I learnt that I could exercise more control over my own birthing experience than I had previously thought, so that I could have the kind of labour that made sense to me, even when plans had to change!"</p>
                    <h4>- Laura</h4>
                </div>
            </div>

        </div>
        </div>
    </div>

  )
}
