import React from 'react'
import './Header.css'
import hed from '../../images/hed.jpg'
import SubHeading from '../subHeading/subHeading'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
         <SubHeading title='chase the new flavor'/>
         <h1 className='app__header-h1'>The key to fine Dinning</h1>
         <p style={{margin:'2rem 0' }} className='p__opensans'>Here, ancient customs and future trends co-exist, and the intricacies
         of African cultural and native delicacies blend seemlessly together with a spicy English spew  </p>
        <a href='#about'><button type='button' className='custom__button' >Explore menu</button></a> 
   </div>
   <div className='app__wrapper_img'>
           <img src={hed} alt='welcome'/>
    </div>
   </div>
  )
}

export default Header
