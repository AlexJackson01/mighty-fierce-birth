import React from 'react'
import Nav from './Nav'
import Video from '../assets/videos/about-video.mp4'
import Footer from './Footer'

export default function TermsConditions () {
  return (
    <div>
      <div className='about-wrap'>
        <div className='about-me tcs'>
          <h3 className='tcs-header'>Terms and Conditions</h3>
          <p>
            Thank you for booking a course with Mighty Fierce Birth! I am
            excited to share this journey with you.
          </p>
          <p>
            These terms and conditions form your contract with me. Any booking
            assumes full and informed compliance to and agreement with all of
            these terms and conditions of sale.
          </p>
          <h4>DEPOSIT</h4>
          <h4>Full Course</h4>
          <p>
            £100 non-refundable deposit to secure the booking and all remaining
            payment must be made 24 hours before your first session.
          </p>
          <h4>Express Course</h4>
          <p>
            £50 non-refundable deposit to secure the booking and all remaining
            payment must be made 24 hours before your first session.
          </p>
          <p>All other courses must be paid in full before your first session.</p>
          <br />
          <h4>BANK DETAILS</h4>
          <p>
            Account Name: Prosha Sharif
            <br />
            Account Number: 91856981
            <br />
            Sort Code: 60-83-71
          </p>
          <h4>CANCELLATIONS</h4>
          <p>
            In the event that your baby arrives early, and all sessions of your
            course were due to take place before your 37th week of pregnancy, a
            refund will be offered. If your baby arrives part way through a
            course, you will be offered a pro-rata refund for the weeks missed.
          </p>
          <p>
            In the unlikely event that the course needs to be cancelled, you
            would also receive a full refund.
          </p>
          <h4>IF YOU NEED TO CANCEL A SESSION DUE TO SICKNESS</h4>
          <p className='tcs-section'>Private classes</p>{' '}
          <p>
            If you or your partner are unwell and are unable to attend a class,
            the session can be rescheduled, at no additional cost, at a time
            convenient to our diary and yours.
          </p>
          <p>
            If you need to re-schedule more than one session, there may be
            additional associated costs (childcare, travel, administration). We
            will endeavour to avoid these, and they must agreed to & paid in
            advance should they be incurred.
          </p>
          <p className='tcs-section'>Group classes</p>{' '}
          <p>
            If you or your partner are unwell and unable to attend a group
            class, We will aim to invite you to attend the next available class.
            We will also send you the class content materials via email.
          </p>
          <h4>DISCLAIMER</h4>

          <p>I accept no responsibility for any of the decisions you make in regards to your pregnancy and birth.</p>
          <p>Prosha Sharif and Mighty Fierce Birth accepts no responsibility for the inappropriate use of Hypnobirthing techniques or complications or harm to any third party resulting from the use of Hypnobirthing techniques as a substitute for medical advice. Hypnobirthing is intended solely as an aid to help increase the comfort of labour and birth and is not in any way a guarantee or promise of expected, imagined or actual outcome of the labour or birth.</p>
          <h4>PRIVACY POLICY</h4>
          <p>
            Our Contact Details:
            <br />
            Prosha Sharif, Mighty Fierce Birth
            <br />
            Tel. 07519954715
            <br />
            Email: mightyfiercebirth@gmail.com
          </p>
        </div>
        <Footer />
      </div>
    </div>
  )
}
