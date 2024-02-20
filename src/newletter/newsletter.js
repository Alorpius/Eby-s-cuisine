import React from 'react'
import SubHeading from '../Container/subHeading/subHeading'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter"/>
     <h1 className='headtext__cormorant'>Subscribe to Eby's Cuisine</h1>
         <p className='p__opensans'>Never miss any update</p>
      </div>
      <div className='app__newsletter-input flex__center'>
          <input type='email' placeholder='Enter your e-mail address'/>
         <button type='button' className='custom__button'>subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
