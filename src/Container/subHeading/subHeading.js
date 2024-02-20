
import React from 'react'
import './subHeading.css';
import spoon from '../../images/spoon.png'

const Subheading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
       <p className='p__cormorant'>{title}</p>
       <img src={spoon} alt='spoon' className='spoon_img'/>
    </div>
  )
}

export default Subheading
