import React from 'react';
import Nav from './Nav';
import Strike from '../assets/images/lightning.png';

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
                    <h4>- Laura, London</h4>
                </div>
            </div>

            <div className="row review">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src={Strike} className="strike" alt="lightning strike" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p>"As a surgeon I was uncertain if Hypnobirthing would be the right choice for me. We live under the illusion of being educated, informed and self-confident. But to be honest I didn’t know too much about giving birth and preparing for it even though I am obviously blessed with medical knowledge and background. Fear from giving birth is something that was imprinted into my mind. Thanks to Prosha I feel informed, I am learning to relax and to trust my body and nature. She managed to tie my overcontrolling mind back to my body empathetically. Including my husband into the course made him feel more important, more prepared and I believe it made him properly realize we are going to have a baby together.. He was impressed of all the evidence-based information Prosha was giving. All I can say is thank you! Have fun reading my birth report after we have brought our wonderful baby daughter into the world"</p>
                    <h4>- Nadya, Germany</h4>
                </div>
            </div>

        </div>
        </div>
    </div>

  )
}
