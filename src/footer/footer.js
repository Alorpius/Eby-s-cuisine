import React from 'react'
import './footer.css'
import Newsletter from '../../src/newletter/newsletter'
import {FiTwitter,FiFacebook,FiInstagram} from 'react-icons/fi'
import spoon from '../images/spoon.png'
import card from '../images/card 22.jpg'

const footer = () => {
  return (
    <div className='app__footer section__padding' id='contacts'>
       <Newsletter/>
        <div className='app__footer-links app__bg'> 
          <div className='app__footer-links_contact'>
              <h1 className='app__footer-headtext'>Contact Us</h1>
            <div className='app__footer-links_icons'>
             <a href='https://www.instagram.com/ebyscuisineandevents?igsh=MWIxd3RjMm5zdnZsOA=='><FiInstagram/></a> 
              <a href='https://www.facebook.com/profile.php?id=100086073737703'><FiFacebook/></a>
             <a href='https://www.facebook.com/profile.php?id=100086073737703'><FiTwitter/></a> 
            </div>
            <div className='app__footer-links_number'>
                <p className='p__cormorant'>Tel:</p>
                <p className='p__cormorant'>08011827463</p>
            </div>
             </div>
          <div className='app__footer-links_logo'>
              <img src={card} alt='logo'/>
              <p className='p__opensans'>The best way to live healthy is to eat healthy</p>
              <img src={spoon} alt='spoon' className='spoon__img' style={{marginTop:'15px'}}/>
           {/*   <div className='app__footer-links_icons'>
               <a href='https://www.facebook.com/profile.php?id=100086073737703'><FiFacebook /></a>
               <a href='https://www.instagram.com/ebyscuisineandevents?igsh=MWIxd3RjMm5zdnZsOA=='><FiInstagram /></a>
                <FiTwitter/>
  </div> */}       
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
        <p className='p__opensans'>2021 Eby's cuisine All Right Reserved.</p>
    </div>
    </div>
  )
}

export default footer