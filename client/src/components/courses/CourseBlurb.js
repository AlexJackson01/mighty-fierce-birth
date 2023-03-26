import React from 'react'
import Baby from '../../assets/images/baby.png'

export default function CourseBlurb () {
  return (
    <div className='course-info'>
      <h1 className='about-header'>Mighty Fierce Birth Courses</h1>

      <img src={Baby} alt='pic of a sleeping baby' className='sleeping-baby' />
      <p>
        Photo by{' '}
        <a
          href='https://instagram.com/shootingstar_fotografie?igshid=YmMyMTA2M2Y='
          target='_blank'
        >
          @shootingstar_fotographie
        </a>
      </p>
      <br />

      <p>
        I offer a wide range of courses at affordable prices. They are science
        and evidence-based with a focus on real-life data and facts!
      </p>

      <p>
        During your course, you will receive a workbook along with other useful
        resources. Additionally, I offer free guidance and resources for
        post-partum!
      </p>

      <p>
        Click the course buttons below for more details and always feel free to
        get in touch!
      </p>
    </div>
  )
}
