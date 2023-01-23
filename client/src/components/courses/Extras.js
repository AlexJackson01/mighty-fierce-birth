import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Star from '@mui/icons-material/Star';

export default function Extras() {
  return (
    <div>
        <h3 className='extras-header'>
                  YOU GET SO MANY OTHER EXTRAS WHEN YOU BOOK A COURSE WITH ME!
                </h3>
                <div className='extras-div'>
                  <p>
                    <StarIcon /> My continued support throughout your pregnancy and course
                    via WhatsApp!
                  </p>
                  <p><StarIcon /> A goody bag with some surprise freebies</p>
                  <p>
                    <StarIcon /> Online resources which includes a full workbook to use
                    throughout your pregnancy
                  </p>
                  <p>
                    <StarIcon /> Other resources you will receive include pre-recorded
                    videos about breastfeeding, sling baby wearing, baby massage
                    and intro to starting solids
                  </p>
                </div>
    </div>
  )
}
