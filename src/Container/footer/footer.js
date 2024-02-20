import React from 'react'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import {FooterOverlay, Newsletter} from '../../components'
import './Footer.css'


const Footer = () => {
  return (
    <div className='app__footer section__padding'>
       <FooterOverlay/>
       <Newsletter/>
       <div className='app__footer-links app__bg'>
          <div className='app__footer-links_contact'>
              <h1 className='app__footer-headtext'>Contact Us</h1>
              <p className='p__opensans'>Adewale crescent badore road Ajag lagos</p>
              <p className='p__opensans'>+271728917626</p>
              <p className='p__opensans'>+537293038740</p>       
          </div>
          <div className='app__footer-links_logo'>
               
              <p className='p__opensans'>The best way to live healthy is to eat healthy</p>
             
              <div className='app__footer-links_icons'>
                <FiFacebook/>
                <FiInstagram/>
                <FiTwitter/>
                </div>        
          </div>
          <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
              <p className='p__opensans'>Monday-Friday</p>
              <p className='p__opensans'>08:00am-12:00am</p>
              <p className='p__opensans'>Saturday-sunday</p>
              <p className='p__opensans'>07:am-11:am</p>       
          </div>
       </div>
       <div className='footer__copyright'>
        <p className='p__opensans'>2021 AlorPius. All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer
