import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Video from '../assets/videos/about-video.mp4';



export default function Reviews() {

    const [reviews, setReviews] = useState([
        {name: "Laura, London", review: "Hypnobirthing transformed my labour and birth from what could have been a stressful or scary event, into one that was actually quite magical. Mystical even. The knowledge and techniques I learnt enabled me to feel empowered and aware of what my body was doing throughout. Lastly, I learnt that I could exercise more control over my own birthing experience than I had previously thought, so that I could have the kind of labour that made sense to me, even when plans had to change!"},
        {name: "Nadya, Germany", review: "As a surgeon I was uncertain if Hypnobirthing would be the right choice for me. We live under the illusion of being educated, informed and self-confident. But to be honest I didn’t know too much about giving birth and preparing for it even though I am obviously blessed with medical knowledge and background. Fear from giving birth is something that was imprinted into my mind. Thanks to Prosha I feel informed, I am learning to relax and to trust my body and nature. She managed to tie my overcontrolling mind back to my body empathetically. Including my husband into the course made him feel more important, more prepared and I believe it made him properly realize we are going to have a baby together.. He was impressed of all the evidence-based information Prosha was giving. All I can say is thank you! Have fun reading my birth report after we have brought our wonderful baby daughter into the world."}
    ])

  return (
    <div className="reviews-section">
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={4}>
                <h1 className='reviews-h1'>Find out what others have said about MFB</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <div className="reviews-wrapper">
                    <div className="reviews-div">
                        {reviews.map((r) => (
                            <div>
                            <p>{r.review}</p>
                            <h5 className="review-text">- {r.name}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
